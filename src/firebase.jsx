import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDDT1SjC1hwvGC1EIhSsWD0PII_zKxYF8",
  authDomain: "chat-app-cb915.firebaseapp.com",
  projectId: "chat-app-cb915",
  storageBucket: "chat-app-cb915.appspot.com",
  messagingSenderId: "998839151271",
  appId: "1:998839151271:web:f07386cbbf6ab7cff40982"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

export const db = getFirestore(app);