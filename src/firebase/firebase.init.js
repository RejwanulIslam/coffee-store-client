// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8n6ON11E1m3zV2nh_r35NDcsJ5EAg2L8",
  authDomain: "coffee-store-88fbb.firebaseapp.com",
  projectId: "coffee-store-88fbb",
  storageBucket: "coffee-store-88fbb.firebasestorage.app",
  messagingSenderId: "349843251630",
  appId: "1:349843251630:web:8ea2f0931080d74e86283f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);