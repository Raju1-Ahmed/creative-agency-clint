import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAGflZu63G5porx3hyPGKfedlX8LWOHZdM",
  authDomain: "creative-agency-a0c6f.firebaseapp.com",
  projectId: "creative-agency-a0c6f",
  storageBucket: "creative-agency-a0c6f.appspot.com",
  messagingSenderId: "716856431682",
  appId: "1:716856431682:web:510aa7b0424989585789db",
  measurementId: "G-KZZH6Z8M4S"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;