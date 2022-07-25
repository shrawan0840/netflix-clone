import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtfHjsGT72YUWmWVTIL07BeyuafYg5rps",
  authDomain: "react-netflix-clone-6e809.firebaseapp.com",
  projectId: "react-netflix-clone-6e809",
  storageBucket: "react-netflix-clone-6e809.appspot.com",
  messagingSenderId: "662885577304",
  appId: "1:662885577304:web:ffbdf46e03e34fa0b5102d",
  measurementId: "G-7RLWEKQJ5F",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
