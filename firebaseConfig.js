// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3EORTb9IiaF8jPCBPvGEDOL2eSMCZq6Y",
  authDomain: "zerobacktomonth.firebaseapp.com",
  databaseURL: "https://zerobacktomonth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zerobacktomonth",
  storageBucket: "zerobacktomonth.appspot.com",
  messagingSenderId: "767650061263",
  appId: "1:767650061263:web:7e49afa222889e0f2b10ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;