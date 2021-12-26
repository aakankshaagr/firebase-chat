import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = (props) => {
  return (
    <div>
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">Connect</Link>
          </div>
        </div>
        <div className="username">Hi Riz</div>
        <ul className="right">
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Signup</NavLink>
          </li>
          <li>
            <Link to={"#"} onClick={props.logout}>
              Logout
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
