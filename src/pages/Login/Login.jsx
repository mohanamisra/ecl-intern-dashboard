import React from 'react';
import {TextField} from "@mui/material";
import Password from "../../components/Password/Password.jsx";


const Login = () => {

    return (
        <div className = 'login-container'>
            <div className="general-header">
                Header
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
                <button>Login</button>
                <p>Forgot Password?</p>
            </form>
        </div>
    );
};

export default Login;