import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
import firebaseConfig from "./firebase.config";

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(firebaseApp);
export const auth: Auth = getAuth(firebaseApp);