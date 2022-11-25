// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbPixNeuJDwl8SyFag0rkPO9hyF7VzDYc",
  authDomain: "chat-77616.firebaseapp.com",
  projectId: "chat-77616",
  storageBucket: "chat-77616.appspot.com",
  messagingSenderId: "689436160695",
  appId: "1:689436160695:web:f66c3991484758285e5332"
};

// Initialize Firebase
// 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()