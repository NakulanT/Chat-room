// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Import getDatabase from Firebase

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyA_TwL4vFxPBBtmiaFgiiCjnj5CroM3XGo",

  authDomain: "chat-room-7fc7f.firebaseapp.com",

  projectId: "chat-room-7fc7f",

  storageBucket: "chat-room-7fc7f.appspot.com",

  messagingSenderId: "234812407283",

  appId: "1:234812407283:web:1b2c6c86b500a0c4b3a686",

  measurementId: "G-P9GLWBRLDP"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

export  { app };
