import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' 
import { getFirestore } from 'firebase/firestore'

// App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1a2_PceKv33ZFCUBT5u9kmHRhh3MbYDM",
  authDomain: "wottu-29a9b.firebaseapp.com",
  projectId: "wottu-29a9b",
  storageBucket: "wottu-29a9b.appspot.com",
  messagingSenderId: "110767770957",
  appId: "1:110767770957:web:a0d670f0620d388c5ffb04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore()
