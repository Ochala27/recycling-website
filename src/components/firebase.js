// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKPFCK5rNJ0ko-oo63GlSl_mQVKC6rQrs",
  authDomain: "authentication-recycling.firebaseapp.com",
  databaseURL: "https://authentication-recycling-default-rtdb.firebaseio.com",
  projectId: "authentication-recycling",
  storageBucket: "authentication-recycling.appspot.com",
  messagingSenderId: "945478792999",
  appId: "1:945478792999:web:806481228226ca74ed5b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };
