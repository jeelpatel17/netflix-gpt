// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBS58wLL1Y-ZsqJAJRqST-MiUCn9tGvKY",
  authDomain: "netflixgpt-aaf8c.firebaseapp.com",
  projectId: "netflixgpt-aaf8c",
  storageBucket: "netflixgpt-aaf8c.appspot.com",
  messagingSenderId: "13506195641",
  appId: "1:13506195641:web:3b669df07ecc0d84c52b68",
  measurementId: "G-58E7H3CW36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
