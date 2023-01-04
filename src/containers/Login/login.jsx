import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/layout";
import { AuthContext } from "../../context/auth.context";

import "./login.css";

const Login = () => {
  const {setAuthToken, setUser} = useContext(AuthContext);
  const [ data, setData ] = useState({
    username: "",
    password: ""
  });

  // const { username, password } = data;

  const handleChange = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  }


  

  

  return (
    <Layout>
    <div className="login">
      <div className="login_top">
            <h5>Login</h5>
            <h1>Login to Value Trading</h1>
      </div>
      <form className="login_form" action="" onSubmit={handleSubmit} >
        <div className="login_form_top">
          <h5>login to dashboard</h5>
          <h2>User <span>Login</span></h2>
        </div>
        <span>
          <input type="text" placeholder="username" name="username" autoComplete="off" onChange={handleChange} required />
          <input type="password" placeholder="password" name="password" onChange={handleChange}  required/>
        </span>
      </form>
      <div className="login_bottom">
        <Link>Forgot Password?</Link>
        <button className="login_btn" type="submit" name="submit" onClick={handleSubmit}><Link to="/dashboard">Login</Link></button>
      </div>
    </div>
    </Layout>
  );
}


export default Login;