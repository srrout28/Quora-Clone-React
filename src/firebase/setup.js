import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ7erWCB0oK17DvS_iQT8bLnyaqHaoYT4",
  authDomain: "quora-soumya.firebaseapp.com",
  projectId: "quora-soumya",
  storageBucket: "quora-soumya.appspot.com",
  messagingSenderId: "162557328068",
  appId: "1:162557328068:web:c79c347410ebee634ca791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getFirestore(app)