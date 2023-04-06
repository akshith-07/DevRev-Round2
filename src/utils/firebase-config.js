
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDPLDXPQIk0FpRym2TVjhRfSNnNQFbaRgM",
  authDomain: "netflix-clone-fd9dd.firebaseapp.com",
  projectId: "netflix-clone-fd9dd",
  storageBucket: "netflix-clone-fd9dd.appspot.com",
  messagingSenderId: "898564346658",
  appId: "1:898564346658:web:ab7c33dda287192d85cb7b",
  measurementId: "G-20TS04V2T8"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);