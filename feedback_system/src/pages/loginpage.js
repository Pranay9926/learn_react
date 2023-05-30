import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("pranay@scsit.com");
  const [password, setPassword] = useState("Pranay");
  const navigate = useNavigate();


  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3001/login", { email, password });
      if(res){
        let uservalue = JSON.stringify(res.data.userdata[0]);
        localStorage.setItem('uservalue',uservalue);
        localStorage.setItem('index',0)
        console.log(res.data.userdata[0])
        navigate("/FeedbackForm");
      }
    } catch (e) {
      alert(e.response.data.msg);   
    }
  };

  return (
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
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};