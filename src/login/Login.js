import React, { useState } from "react";
import Layout from "../members/Layout";
import Card from "../members/Card";
import "./login.css";
import { updateDoc, doc } from "firebase/firestore";
//import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      console.log("done");

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
      <div className="login" onSubmit={handleSubmit}>
        <Card>
          <form>
            <h3>LOGIN </h3>

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
              id="login"
              type="submit"
              class="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Logging in" : "LOGIN"}
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
