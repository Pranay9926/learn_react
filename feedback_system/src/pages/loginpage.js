import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, such as validating the credentials or making an API request
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log(res);
      });
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    // <div className="container">
    // <div className="left"></div>
    // <div className="right">
    <div id="login">
      <form onSubmit={handleSubmit}>
        <h2 id="loginh2">Login</h2>
        <h3 id="loginh3">Enter your Email ID</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          style={{ width: "200px", height: "30px" }}
          onChange={handleEmailChange}
        />
        <h3 id="loginh3">Enter your Password</h3>

        <input
          type="password"
          placeholder="Password"
          value={password}
          style={{ width: "200px", height: "30px" }}
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <button className="login_sing" type="submit">
          Login
        </button>
        <button
          className="login_sing"
          type="submit"
          onClick={() => {
            navigate("/Signin");
          }}
          // style={{ marginLeft: "30px" }}
        >
          Sign In
        </button>
      </form>
    </div>
    // </div>
    // </div>
  );
};