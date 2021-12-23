import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./members/Home";
import Login from "./members/Login";
import Register from "./members/Register";
//import firebase from "firebase/app";

//import "firebase/auth";
//import "firebase/compat/firestore";
import React from "react";
/*
//register app in firebase and copy config keys here
firebase.initalizeApp({
  apiKey: "AIzaSyBf_lsqUEEkuRDx4PGKmjFuLdQvt_4nTg8",
  authDomain: "fir-chat-bf0c4.firebaseapp.com",
  projectId: "fir-chat-bf0c4",
  storageBucket: "fir-chat-bf0c4.appspot.com",
  messagingSenderId: "905976919666",
  appId: "1:905976919666:web:7f7f1b3a7dcc30484cf4eb",
  measurementId: "G-NXMVZDT2D3",
});

const auth = firebase.auth();
const db = firebase.firestore();
function App() {
  //to set current state of user signed in or sign out
  const [user, setUser] = useState(() => auth.currentUser);
  //authentication check if asynchronous so we need to prevent showing chat window before authentication completes
  const [start, setStart] = useState(true);
  //onAuthStateChange to check current state of user if user is signed in or sign out
  useEffect(() => {
    const logout = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (start) {
        setStart(false);
      }
    });
    return logout;
  });
  //google Authentication setup
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    //language preference is based on default browser language.
    auth.useDeviceLanguage();
    //starting sign in process with a pop up window
    try {
      await auth.signInWithPopup(provider);
    } catch (e) {
      console.log(e);
    }
  };
  if (start) return "loading";
  return (
    <div className="App">
      <header className="App-header">hello world</header>
      {user ? (
        <div>
          <button onClick={signOut}>Sign Out</button>
          <p>"Welcome to FireBase Chat"</p>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      )}
    </div>
  );
}
*/
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
