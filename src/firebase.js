// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk1ydvvOtfhCsaqd4etd26K-ACViHfemM",
  authDomain: "chat-f3a47.firebaseapp.com",
  projectId: "chat-f3a47",
  storageBucket: "chat-f3a47.appspot.com",
  messagingSenderId: "5893564818",
  appId: "1:5893564818:web:0f4482e6eb849e7963794b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();