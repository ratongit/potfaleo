// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA551kPMaP3YBj2hKJqAPjoVb-53BkoIkc",
  authDomain: "potfaleo.firebaseapp.com",
  projectId: "potfaleo",
  storageBucket: "potfaleo.appspot.com",
  messagingSenderId: "161932840425",
  appId: "1:161932840425:web:4a3667bb9c018e3a94cf78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app