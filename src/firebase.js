// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQPvDl-qADyACQj4CgLtfDTkez8P2uYlg",
  authDomain: "prodcastapp.firebaseapp.com",
  projectId: "prodcastapp",
  storageBucket: "prodcastapp.appspot.com",
  messagingSenderId: "418267208781",
  appId: "1:418267208781:web:d07f6c39834026c9519004",
  measurementId: "G-DSZW40YRS6"
};

// Initialize Firebase suraj
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };