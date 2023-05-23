import React, { useState } from "react";
import axios from "axios";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here, such as validating the credentials or making an API request
        axios.post('http://localhost:3001/login',{email,password})
        .then((res)=>{
            console.log(res)
        })
        // console.log('Email:', email);
        // console.log('Password:', password);
    };

    return (
        <div>
            <h1 id="loginh1">Welcome to Student Feedback System</h1>
            <h2 id="login2">Login</h2>
            <form id="login" onSubmit={handleSubmit}>
                <h3>Enter your Email ID</h3>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <h3>Enter your Password</h3>

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
