// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQUW-E9SqT3YsK1O2STbIzPwMnVFJI__4",
  authDomain: "netflixgpt-3b15a.firebaseapp.com",
  projectId: "netflixgpt-3b15a",
  storageBucket: "netflixgpt-3b15a.appspot.com",
  messagingSenderId: "556571444385",
  appId: "1:556571444385:web:beb12dff94f06494d59ce0",
  measurementId: "G-N7WLVYZ042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();