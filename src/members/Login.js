import React from "react";
import Layout from "../members/Layout";
import Card from "../members/Card";
import "../styles/login.css";
function Login() {
  return (
    <div>
      <Layout />
      <div className="login">
        <Card>
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
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
                placeholder="Password"
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
}

export default Login;
