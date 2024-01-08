import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" name="email" placeholder="Enter email" />
          <input type="password" name="password" placeholder="Enter password" />
          <button>Continue</button>
        </div>
        <p className="loginsignup-login">Already have an account ? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="agree"/>
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
