import React from 'react';
import Password from "../../components/Password/Password.jsx";
import Button from "../../components/Button/Button.jsx"
import {useState} from "react";
import './Login.css'
import {Link} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        setEmail(newEmail);
        console.log(email);
    }

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
    }

    return (
        <div className = 'login-container'>
            <div className="general-header">
            </div>

            <form action="" className="login-form">
                <h1 className = 'form-heading'>Intern Login</h1>
                <div className = 'form-row'>
                    <label htmlFor="email">Email: </label>
                    <input type = "text" id = "email" required
                           placeholder = "Enter email..." onChange={handleEmailChange}
                            value = {newEmail}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="password">Password: </label>
                    <Password/>
                </div>
                <Button text = "Login" buttonClass="login button" clickHandler={handleLoginClick}/>
                <p>Forgot Password?</p>
                <p><Link to = "/register">New user?</Link></p>
            </form>
        </div>
    );
};

export default Login;