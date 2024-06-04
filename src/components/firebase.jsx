// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA5_A4TLme3TZ6LJtUQSpXYxN3yjjo4lA",
    authDomain: "ecl-intern-dashboard.firebaseapp.com",
    projectId: "ecl-intern-dashboard",
    storageBucket: "ecl-intern-dashboard.appspot.com",
    messagingSenderId: "695309393089",
    appId: "1:695309393089:web:8f8f1e342d7178ec140840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const imageDB = getStorage(app);
export default app;