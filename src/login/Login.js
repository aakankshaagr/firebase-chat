import React, { useState } from "react";
import Layout from "../members/Layout";
import Card from "../members/Card";
import "./login.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Layout />
      <div className="login">
        <Card>
          <form>
            <h3>Login</h3>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                value={email}
                aria-describedby="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="email" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="privacy" />
              <label class="form-check-label" for="privacy">
                Agree Privacy Policy
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
