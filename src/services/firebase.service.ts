import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, Firestore, getFirestore, setDoc } from "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { Auth, GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from "firebase/auth";
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
    }
};