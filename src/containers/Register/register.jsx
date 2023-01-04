import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/layout";

import "./register.css";

const Register = () => {
  return (
    <Layout>
      <div className="register">
        <div className="register_top">
          <h5>Register</h5>
          <h1>Sign up to Value Trading</h1>
        </div>
        <form className="register_form">
          <div className="register_form_top">
            <h5>create an account</h5>
            <h2>
              Users <span>signup</span>
            </h2>
          </div>
          <span>
            <input type="text" placeholder="Your Fullname" />
            <input type="username" placeholder="username" />
          </span>
          <span>
            <input type="password" placeholder="password" />
            <input type="password" placeholder="Retype password" />
          </span>
          <span>
            <input type="email" placeholder="Your email" />
            <input type="username" placeholder="usernam" />
          </span>
          <span>
            <input type="text" placeholder="Bitcoin" />
            <input type="text" placeholder="Ethereum" />
          </span>
          <span>
            <input type="text" placeholder="From USD (Erc20)" />
            <input type="text" placeholder="Binance coin" />
          </span>
        </form>
        <div className="register_bottom">
          <button className="register_btn">Register</button>
          <p>
            Already have an account? <Link to="/Login">Login now</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
