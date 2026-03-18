import { FirebaseApp, initializeApp } from "firebase/app";
import {
    addDoc,
    arrayUnion,
    collection,
    doc,
    DocumentData,
    Firestore,
    getDoc,
    getDocs,
    getFirestore,
    onSnapshot,
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
import { Dispatch, SetStateAction } from "react";
import { ChatListItemType } from "../types/chat-list-item.type";

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
    },
    onChatList: (userId: string, setChatList: Dispatch<SetStateAction<ChatListItemType[]>>) => {
        return onSnapshot(doc(db, "users", userId), (docSnap) => {
            if (!docSnap.exists()) {
                console.error(`User with id ${userId} does not exist.`);
                return;
            }

            const data = docSnap.data();
            const chats: ChatListItemType[] = data?.chats ?? [];
            const orderedChats: ChatListItemType[] = chats.sort((a: ChatListItemType, b: ChatListItemType): number => {
                if (a.lastMessageDate === undefined || b.lastMessageDate === undefined) {
                    return -1;
                }

                if (a.lastMessageDate.seconds < b.lastMessageDate?.seconds) {
                    return 1;
                } else {
                    return -1;
                }
            });

            setChatList(orderedChats);
        });
    },
    onChatContent: (
        chatId: string, 
        setMessages: Dispatch<SetStateAction<any[]>>, 
        setUsers: Dispatch<SetStateAction<string[]>>
    ) => {
        return onSnapshot(doc(db, "chats", chatId), (docSnap) => {
            if (!docSnap.exists()) {
                console.error(`Chat with id ${chatId} does not exist.`);
                return;
            }

            const data = docSnap.data();
            const messages = data?.messages ?? [];
            setMessages(messages);
            setUsers(data?.users ?? []);
        });
    },
    sendMessage: async (
        chat: ChatListItemType, 
        userId: string, 
        type: string, 
        body: string,
        users: string[]
    ): Promise<void> => {
        await updateDoc(doc(db, "chats", chat.chatId), {
            messages: arrayUnion({
                type,
                body,
                authorId: userId,
                date: new Date()
            })
        });

        for (const uid of users) {
            const userDoc = await getDoc(doc(db, "users", uid));
            const userData = userDoc.data();

            if (!userData) {
                console.error(`User with id ${uid} does not exist.`);
                continue;
            }

            if (!userData.chats) {
                console.error(`User with id ${uid} does not have a chats field.`);
                continue;
            }

            const chats = [...userData.chats];

            for (const c of chats) {
                if (c.chatId === chat.chatId) {
                    c.lastMessage = body;
                    c.lastMessageDate = new Date();
                }
            }

            await updateDoc(doc(db, "users", uid), {
                chats
            });
        }
    }
};