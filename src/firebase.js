// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "linkedin-clone-50448.firebaseapp.com",
    projectId: "linkedin-clone-50448",
    storageBucket: "linkedin-clone-50448.appspot.com",
    messagingSenderId: "534982449558",
    appId: "1:534982449558:web:d3ca006bdc0dca03d5a5b7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };