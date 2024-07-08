


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzlMkW9wyxhsrW8bO-EnoZORM9vZothg4",
  authDomain: "laundry-app-95a54.firebaseapp.com",
  projectId: "laundry-app-95a54",
  storageBucket: "laundry-app-95a54.appspot.com",
  messagingSenderId: "719105530560",
  appId: "1:719105530560:web:21948a6f2190e66b63eb25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db}