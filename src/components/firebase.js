// Import the functions from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKPFCK5rNJ0ko-oo63GlSl_mQVKC6rQrs", // Firebase API key
  authDomain: "authentication-recycling.firebaseapp.com", //Firebase Authentication domain
  databaseURL: "https://authentication-recycling-default-rtdb.firebaseio.com", // URL of your Firebase Realtime Database
  projectId: "authentication-recycling", // Firebase project ID
  storageBucket: "authentication-recycling.appspot.com", //Firebase storage bucket
  messagingSenderId: "945478792999", //Firebase messaging sender ID
  appId: "1:945478792999:web:806481228226ca74ed5b02" //Firebase app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize the Firebase app with the configuration
const database = getDatabase(app); // Initialize the Realtime Database with the app instance
const auth = getAuth(app); // Initialize the Authentication service with the app instance

// Export the initialized Firebase services for use in other parts of your application
export { app, database, auth };
