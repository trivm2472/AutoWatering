// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9EquIVq7j04ZTjQJ3HUln4kdEB1U3oOI",
  authDomain: "autowatering-e0d2b.firebaseapp.com",
  projectId: "autowatering-e0d2b",
  storageBucket: "autowatering-e0d2b.appspot.com",
  messagingSenderId: "359277291529",
  appId: "1:359277291529:web:3dd66a403755fae15030d8",
  measurementId: "G-2BV176Q81S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);