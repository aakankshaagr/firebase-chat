import React from "react";
import { NavLink, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import "../styles/navbar.css";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";

const Navbar = (props) => {
  const handleSignout = async () => {
    await signOut();
  };
  return (
    <div>
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">Connect</Link>
          </div>
        </div>
        <div className="username">Hi Riz</div>

        {!auth.currentUser ? (
          <ul className="right">
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <btn onClick={handleSignout}>Logout</btn>
            </li>
          </ul>
        ) : (
          <ul className="right">
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}>Signup</NavLink>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Navbar;
