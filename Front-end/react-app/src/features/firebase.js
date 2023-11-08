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
export const db = getFirestore()


// apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId:process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
//   appId: process.env.REACT_APP_APP_ID,


