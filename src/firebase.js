// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUoKbPfKbXY2fRhiuRGyq6AAEACxieefE",
  authDomain: "data-device.firebaseapp.com",
  projectId: "data-device",
  storageBucket: "data-device.appspot.com",
  messagingSenderId: "193304813577",
  appId: "1:193304813577:web:4422b029d0d6a4115e58d8",
  measurementId: "G-16REYG8MBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
