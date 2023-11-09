import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDynDyxJJu75HcD7tqvf7-CpAy_tpeXHIY",
  authDomain: "chat-system-46e89.firebaseapp.com",
  databaseURL: "https://chat-system-46e89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-system-46e89",
  storageBucket: "chat-system-46e89.appspot.com",
  messagingSenderId: "769724516836",
  appId: "1:769724516836:web:ed0d06c2fea44e15401ff1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
