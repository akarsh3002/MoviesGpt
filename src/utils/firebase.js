// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFIv36VxnMChl63nhQ5lPjuGtFVH7ACXQ",
  authDomain: "moviesgpt-61abb.firebaseapp.com",
  projectId: "moviesgpt-61abb",
  storageBucket: "moviesgpt-61abb.firebasestorage.app",
  messagingSenderId: "450492535689",
  appId: "1:450492535689:web:995d8785c90437c6334758",
  measurementId: "G-N3SHWX3TS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
