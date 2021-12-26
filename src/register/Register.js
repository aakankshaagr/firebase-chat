import React, { useState } from "react";
import Layout from "../members/Layout";
import Card from "../members/Card";
import "./register.css";
import { doc, setDoc, Timestamp } from "firebase/firestore";
//import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Register() {
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validateName = (e) => {
    if (e.target.value.trim() === "") {
      setIsValidName(false);
    } else {
      setName(e.target.value);
      setIsValidName(e.target.checkValidity());
    }
  };

  const validateEmail = (e) => {
    setIsValidEmail(e.target.checkValidity());
    setEmail(e.target.value);
  };
  const validatePassword = (e) => {
    if (e.target.value.trim() === "") {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(e.target.checkValidity());
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result.user);
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        fname,
        email,
        password,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      }).catch((e) => {
        console.log(e);
      });
      console.log("done");
      setName("");
      setPassword("");
      setEmail("");
      setLoading(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Layout />
      <div className="register" onSubmit={handleSubmit}>
        <Card>
          <form>
            <h3>Create Account</h3>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                class="form-control"
                id="name"
                value={fname}
                aria-describedby="name"
                placeholder="Name"
                onChange={validateName}
              />
              {!isValidName && (
                <span className="error">
                  Must be between 2-30 characters long. Can only contain
                  alphabets, whitespace and dash '-'
                </span>
              )}
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                value={email}
                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                aria-describedby="email"
                placeholder="Enter email"
                onChange={validateEmail}
              />
              <small id="email" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div>
                {!isValidEmail && (
                  <span className="error">
                    Must be between 2-30 characters long. Can only contain
                    alphabets, whitespace and dash '-'
                  </span>
                )}
              </div>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                minLength={8}
                maxLength={64}
                id="password"
                value={password}
                placeholder="Password"
                onChange={validatePassword}
              />
              {!isValidPassword && (
                <span className="error">Must be between 8-64 characters</span>
              )}
            </div>

            <button
              id="signup"
              type="submit"
              class="btn btn-primary"
              disabled={loading}
            >
              Sign Up
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Register;
