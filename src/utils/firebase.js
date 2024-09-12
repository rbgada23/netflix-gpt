// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHEFNOBCNfQdvf6cHFXhfANMAL540nHJE",
  authDomain: "netflix-gpt-93055.firebaseapp.com",
  projectId: "netflix-gpt-93055",
  storageBucket: "netflix-gpt-93055.appspot.com",
  messagingSenderId: "211924321133",
  appId: "1:211924321133:web:f200ad5fe3b6742c3d5064",
  measurementId: "G-R4Z077TZD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();