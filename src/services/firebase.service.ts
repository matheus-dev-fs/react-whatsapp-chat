import { FirebaseApp, initializeApp } from "firebase/app";
import {
    addDoc,
    arrayUnion,
    collection,
    doc,
    DocumentData,
    Firestore,
    getDocs,
    getFirestore,
    QuerySnapshot,
    setDoc,
    updateDoc
} from "firebase/firestore";
import firebaseConfig from "./firebase.config";
import {
    Auth,
    GoogleAuthProvider,
    UserCredential,
    getAuth,
    signInWithPopup
} from "firebase/auth";
import { User } from "../types/user.type";

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(firebaseApp);
const auth: Auth = getAuth(firebaseApp);

export default {
    loginPopup: async (): Promise<UserCredential> => {
        const provider: GoogleAuthProvider = new GoogleAuthProvider();
        const result: UserCredential = await signInWithPopup(auth, provider);
        return result;
    },

    addUser: async (user: User): Promise<void> => {
        await setDoc(
            doc(db, "users", user.id),
            {
                id: user.id,
                name: user.name,
                avatar: user.avatar
            },
            { merge: true }
        );
    },

    getContactList: async (userId: string): Promise<User[]> => {
        const list: User[] = [];
        const result: QuerySnapshot<DocumentData, DocumentData> = await getDocs(collection(db, "users"));

        result.forEach((docSnap) => {
            const data = docSnap.data();
            const contactId: string = data.id ?? docSnap.id;

            if (contactId === userId) {
                return;
            }

            list.push({
                id: contactId,
                name: data.name ?? "",
                avatar: data.avatar ?? ""
            });
        });

        return list;
    },

    addNewChat: async (user1: User, user2: User): Promise<void> => {
        if (!user1.id || !user2.id) {
            console.error("Both users must have an id to create a new chat.");
            return;
        }

        const newChat = await addDoc(collection(db, "chats"), {
            messages: [],
            users: [user1.id, user2.id]
        });

        await updateDoc(doc(db, "users", user1.id), {
            chats: arrayUnion({
                chatId: newChat.id,
                title: user2.name,
                image: user2.avatar,
                with: user2.id
            })
        });

        await updateDoc(doc(db, "users", user2.id), {
            chats: arrayUnion({
                chatId: newChat.id,
                title: user1.name,
                image: user1.avatar,
                with: user1.id
            })
        });
    }
};