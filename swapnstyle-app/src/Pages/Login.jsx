import React from "react";
import './CSS/Login.css';



function Login (){
  return(
    <div className="signup">
      <div className="singup-container">
        <h1>Login</h1>
      <div className="signup-fields">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password"/>
      </div>  
      <div className="continue-btn">
      <button>Continue</button>
      </div>
      <p className="signup-login">Don't have an account? <span>Sing up here</span></p>
      </div>
    </div>  
    
  );
}

export default Login



