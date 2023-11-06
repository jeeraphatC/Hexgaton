import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtjyUw-Bl_Nj5i1mmJ4PHRR0uHqJfhCYA",
  authDomain: "chat-project-129b1.firebaseapp.com",
  projectId: "chat-project-129b1",
  storageBucket: "chat-project-129b1.appspot.com",
  messagingSenderId: "420485931620",
  appId: "1:420485931620:web:fb645fc8e39d9b76343571"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
