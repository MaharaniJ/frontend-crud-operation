import React from "react";
import "../styles/auth.css";

function Register() {
  return (
    <div className="container">
      <h2 className="header">Welcome to Register Page!</h2>
      <div className="auth">
       
      <label className="label">Name</label>
       <input className="input"></input>
       <label className="label">email</label>
       <input className="input"></input>
       <label className="label">password</label>
       <input className="input"></input>
       <p className="para">Already have an account? <a className="login" href="login">login</a></p>
      </div>
    </div>
  );
}

export default Register;

