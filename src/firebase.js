// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPnIoSavYhTipz9KSO-7kVIQFvjgrwoMI",
  authDomain: "dopeornope-e7415.firebaseapp.com",
  projectId: "dopeornope-e7415",
  storageBucket: "dopeornope-e7415.firebasestorage.app",
  messagingSenderId: "56510405429",
  appId: "1:56510405429:web:7c6d4b0d231c1b04d08a7c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };