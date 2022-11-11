
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCk1ydvvOtfhCsaqd4etd26K-ACViHfemM",
  authDomain: "chat-f3a47.firebaseapp.com",
  projectId: "chat-f3a47",
  storageBucket: "chat-f3a47.appspot.com",
  messagingSenderId: "5893564818",
  appId: "1:5893564818:web:0f4482e6eb849e7963794b"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
