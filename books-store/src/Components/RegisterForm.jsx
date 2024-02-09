import React, { useState } from "react";
import "./RegisterForm.css";

export default function Form() {
  const [field, setField] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [submitted, setSubmit] = useState(false);
  const [check, setCheck] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (field.firstName && field.email && field.password && field.confirmPassword) {
      if (field.password === field.confirmPassword) {
        if (checkEmail(field.email)) {
          setCheck(true);
        } else {
          setCheck(false);
        }
      } else {
        setCheck(false);
      }
    }
    setSubmit(true);
  };

  const checkEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          {submitted && check ? (
            <div className="success">Registration successful!</div>
          ) : null}

          <input
            id="first-name"
            className="input"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={field.firstName}
            onChange={(e) => {
              setField({ ...field, firstName: e.target.value });
            }}
          />
          {submitted && !field.firstName ? <span>Please enter your Name</span> : null}

          <input
            id="email"
            className="input"
            type="text"
            placeholder="Email"
            name="email"
            value={field.email}
            onChange={(e) => {
              setField({ ...field, email: e.target.value });
            }}
          />
          {submitted && !field.email ? <span>Please enter your email</span> : null}
          {submitted && field.email && !checkEmail(field.email) ? (
            <span>Please enter a valid email</span>
          ) : null}

          <input
            id="password"
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            value={field.password}
            onChange={(e) => {
              setField({ ...field, password: e.target.value });
            }}
          />
          {submitted && !field.password ? <span>Please enter your password</span> : null}

          <input
            id="confirm-password"
            className="input"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={field.confirmPassword}
            onChange={(e) => {
              setField({ ...field, confirmPassword: e.target.value });
            }}
          />
          {submitted && field.password !== field.confirmPassword ? (
            <span>Passwords do not match</span>
          ) : null}

          <button className="input" id="form-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}