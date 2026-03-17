import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { Auth, GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from "firebase/auth";

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(firebaseApp);
const auth: Auth = getAuth(firebaseApp);

export default {
    loginPopup: async (): Promise<UserCredential> => {
        const provider: GoogleAuthProvider = new GoogleAuthProvider();
        const result: UserCredential = await signInWithPopup(auth, provider);
        return result;
    }
};