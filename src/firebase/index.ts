// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgp8QJBbXauiM1gdqvcZ7J2vg9DRimZMA",
  authDomain: "contacts-user-b765c.firebaseapp.com",
  projectId: "contacts-user-b765c",
  storageBucket: "contacts-user-b765c.appspot.com",
  messagingSenderId: "422863119221",
  appId: "1:422863119221:web:6771c9656ad92d1aad693c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
