import React from 'react';
import {TextField} from "@mui/material";
import Password from "../../components/Password/Password.jsx";
import Button from "../../components/Button/Button.jsx"
import './Login.css'

const Login = () => {

    const handleLoginClick = () => {
        console.log("LOGIN");
    }
    return (
        <div className = 'login-container'>
            <div className="general-header">
            </div>

            <form action="" className="login-form">
                <h1 className = 'form-heading'>Intern Login</h1>
                <div className = 'form-row'>
                    <label htmlFor="name">Name: </label>
                    <TextField label = "Enter name..." required = {true} size = 'small'/>
                </div>
                <div className='form-row'>
                    <label htmlFor="password">Password: </label>
                    <Password/>
                </div>
                <Button text = "Login" buttonClass="login button" clickHandler={handleLoginClick}/>
                <p>Forgot Password?</p>
            </form>
        </div>
    );
};

export default Login;