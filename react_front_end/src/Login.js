import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // return (
    // <div className="login">
    //     <h1 className="Login_Title">Log In</h1>
    const handleSubmit = async () => {
        alert("Logged in")
        console.log(username, password)
    }
    function handleClick() {
        navigate("/signup");
    }
    return (
        <>
        <div class="login">
            <h1 className="Login_Title">Log In</h1>
            <form className='loginForm'>
                <input type="text" placeholder="Username" value={username} onChange={event => setName(event.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
            </form>
            <button type="submit" className='login_button' onClick={handleSubmit}>
                Log In
            </button>
            <div className='additional_text'>
                <h6 class="dontHaveAccount" onClick={handleClick}>Don't have an account?</h6>
                <h6 class="forgotPassword" onClick={handleClick}>Forgot Password?</h6>
            </div>
        </div>
        </>
    );
};
    