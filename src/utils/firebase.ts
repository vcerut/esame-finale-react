import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7qYFFqZG958PfJofDD9bc_ohW-fwIDuM",
  authDomain: "ouroboros-live-club-ea4ae.firebaseapp.com",
  databaseURL:
    "https://ouroboros-live-club-ea4ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ouroboros-live-club-ea4ae",
  storageBucket: "ouroboros-live-club-ea4ae.appspot.com",
  messagingSenderId: "733310538001",
  appId: "1:733310538001:web:194ad435d34f7ec6e97cb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
