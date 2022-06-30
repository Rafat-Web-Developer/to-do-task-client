// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSzLCH0CqlwscwmTyVS2G9GOJbAw2COeI",
  authDomain: "todo-tasks-12988.firebaseapp.com",
  projectId: "todo-tasks-12988",
  storageBucket: "todo-tasks-12988.appspot.com",
  messagingSenderId: "642069724956",
  appId: "1:642069724956:web:112f9efd72d79f08be04d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
