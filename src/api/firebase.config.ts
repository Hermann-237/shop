import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVnPR86YouLCMi7Kzjh0XRL25PSEc759Y",
  authDomain: "tamouya-shop.firebaseapp.com",
  projectId: "tamouya-shop",
  storageBucket: "tamouya-shop.appspot.com",
  messagingSenderId: "584427164597",
  appId: "1:584427164597:web:a142284114f6d9e7c6bffc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  addDoc,
  collection,
  setDoc,
  doc,
  getAuth,
  Timestamp,
};
