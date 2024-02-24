import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { navigate } from 'react-router-dom';
import "../Styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://ecommerce-app-by-rayyan.onrender.com/login", {
        email,
        password,
      });

      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="loginContainer">
      <div className="formContainer">
      <div className="header">
        <img src="https://www.fatbit.com/fab/wp-content/uploads/2015/03/Online-Jewelry-Shopping-Store.png" alt="Header" className="headerImage" />
      </div>
        <form className="loginForm" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <label className="label">Email:</label>
          <input type="email" className="input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="label">Password:</label>
          <input type="password" className="input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="button">Login</button>
        </form>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <p className="signupText">Not an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
