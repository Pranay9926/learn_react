import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'

export const Signin = () => {
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
      .post("http://localhost:3001/signin", { email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("email", email);
        navigate("/Forms");
      }).catch(e=>{
        console.log(e)
      });
    // console.log('Email:', email);
    // console.log('Password:', password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {/* <h2>Sign In</h2> */}
      <form id="login" onSubmit={handleSubmit}>
        <h2 id="loginh2">Sign In</h2>
        <h3>Enter your Email ID</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          style={{ width: "200px", height: "30px" }}
          onChange={handleEmailChange}
        />
        <h3>Enter your Password</h3>

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
          Sign In
        </button>
      </form>
    </div>
  );
};


