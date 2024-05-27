import React from 'react';
import {TextField} from "@mui/material";
import Password from "../../components/Password/Password.jsx";
import Button from "../../components/Button/Button.jsx"
import './Register.css'

const Register = () => {

    const handleLoginClick = () => {
        console.log("REGISTER");
    }
    return (
        <div className = 'register-container'>
            <div className="general-header">
            </div>

            <form action="" className="register-form">
                <h1 className='form-heading'>Intern Register</h1>
                <div className='form-row'>
                    <label htmlFor="name">Name: </label>
                    <TextField label="Enter name... " required={true}
                               size='small' id = "name"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="email">Email: </label>
                    <TextField label="Enter email... " required={true}
                               size='small' type="email" id = "email"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="institute">Institute: </label>
                    <TextField label="Enter institute name... " required={true}
                               size='small' id = "institute"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="project-name">Project Name: </label>
                    <TextField label="Enter project name... " required={true}
                               size='small' id = "project-name"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="password">Password: </label>
                    <Password id = "password"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <Password id = "confirm-password"/>
                </div>
                <Button text="Register" buttonClass="register button"
                        clickHandler={handleLoginClick}/>
                <p>Account already exists?</p>
            </form>
        </div>
    );
};

export default Register;