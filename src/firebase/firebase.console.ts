// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzH_Ujg86G5msyPJJsnMKP8sadDn-Rt2s",
  authDomain: "tastynest-4dc7b.firebaseapp.com",
  projectId: "tastynest-4dc7b",
  storageBucket: "tastynest-4dc7b.firebasestorage.app",
  messagingSenderId: "254516406880",
  appId: "1:254516406880:web:758da78bdb63b751807105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;