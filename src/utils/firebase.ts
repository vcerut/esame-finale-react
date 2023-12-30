import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

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

function writeReservation(email: string, eventId: string, time: string) {
  const db = getDatabase(app);
  const reference = ref(db, "details/" + eventId);

  push(reference, {
    email: email,
    eventId: eventId,
    time: time,
  }).catch((error) => {
    console.error("Error writing documents: ", error);
  });
}

export default writeReservation;
