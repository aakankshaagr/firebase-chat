import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf_lsqUEEkuRDx4PGKmjFuLdQvt_4nTg8",
  authDomain: "fir-chat-bf0c4.firebaseapp.com",
  databaseURL: "https://fir-chat-bf0c4-default-rtdb.firebaseio.com",
  projectId: "fir-chat-bf0c4",
  storageBucket: "fir-chat-bf0c4.appspot.com",
  messagingSenderId: "905976919666",
  appId: "1:905976919666:web:7f7f1b3a7dcc30484cf4eb",
  measurementId: "G-NXMVZDT2D3",
  /*
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,*/
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
