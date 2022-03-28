// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBqHThPdYVIE8bgktNNEgJqbw11BMqM0I",
  authDomain: "react-firebase-auth-af3c9.firebaseapp.com",
  projectId: "react-firebase-auth-af3c9",
  storageBucket: "react-firebase-auth-af3c9.appspot.com",
  messagingSenderId: "192843869868",
  appId: "1:192843869868:web:d0f8a8b64df933d4afb909",
  measurementId: "G-BGTZBYDY0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db =  getFirestore(app)