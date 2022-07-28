import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/demo.css";
import Footer from "./Footer";
import Header from "./Header";

class Signin extends React.Component {
  render() {
    return (
      <div
        className="body"
        style={{
          backgroundImage: `url("/fitness3.webp")`,
        }}
      >
        <Header />
        <form className="forms1 mt-5" onSubmit={() => {}}>
          <h1 className="head2" title="Enter Fields">
            Continue to Login
          </h1>

          <div className="input-group-login sombreado-input" title="mail">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-envelope-open" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="email"
              className="border-0-login form-control-login input-border-none"
              placeholder="Gmail"
              name="gmail"
              required
            />
          </div>

          <div className="input-group-login sombreado-input" title="password">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-key" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="password"
              className="border-0-login form-control-login input-border-none"
              placeholder="password"
              required
            />
          </div>
          <div className="input-group-login sombreado-input">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </span>
            </div>

            <select
              className="border-0-login form-control-login input-border-none"
              title="login as"
            >
              <option value="">None</option>
              <option value="">User</option> 
              <option value="">Admin</option>
            </select>
          </div>

          <p className="text-center " title="log in">
            <button className="button-signup fondo-color-signup">
              <strong>Log in</strong>
            </button>
          </p>

          <span className="gap ">
            <a
              href="/signup"
              target="_blank"
              title="To new Account"
              className="text-dark"
            >
              <label for="">Create new Account</label>
            </a>
            <span>|</span>
            <a
              href="/reset"
              target="_blank"
              title="Forget"
              className="text-dark"
            >
              <label for="">Forget Password</label>
            </a>
          </span>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Signin;
