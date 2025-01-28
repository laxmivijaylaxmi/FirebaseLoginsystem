// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcxuENCzT1Rt-ln6cg8rP_Ka_b8pZectM",
  authDomain: "student-management-syste-a26a5.firebaseapp.com",
  projectId: "student-management-syste-a26a5",
  storageBucket: "student-management-syste-a26a5.firebasestorage.app",
  messagingSenderId: "847499488684",
  appId: "1:847499488684:web:a0cf738a7ebe5726749e09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Intitialize FireStore
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
