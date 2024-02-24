import React from 'react';
import '../Styles/Signup.css'; // Importing CSS for Signup component

const Signup = () => {
  return (
    <div className="signup-container">
      
      <div className="form-container">
      <div className="header">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*b8MC_u1M_VE-8tnj_uCutw.jpeg" alt="Header" className="header-image" />
      </div>
        <form className="signup-form">
          <label className="label">Username:</label>
          <input type="text" className="input" placeholder="Enter your username" />

          <label className="label">Email:</label>
          <input type="email" className="input" placeholder="Enter your email" />

          <label className="label">Password:</label>
          <input type="password" className="input" placeholder="Enter your password" />

          <button type="submit" className="button">Signup</button>
        </form>
        <p className="signin-text" style={{textAlign:"center"}}>Already have an account? <a href="/login">Sign in</a></p>
      </div>
    </div>
  );
};

export default Signup;
