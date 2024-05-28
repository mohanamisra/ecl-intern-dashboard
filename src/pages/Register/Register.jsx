import React from 'react';
import Password from "../../components/Password/Password.jsx";
import Button from "../../components/Button/Button.jsx"
import './Register.css'
import {Link} from "react-router-dom";

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
                    <input placeholder="Enter name... *" required
                               size='small' id = "name"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="email">Email: </label>
                    <input placeholder="Enter email... *" required
                               size='small' type="email" id = "email"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="institute">Institute: </label>
                    <input placeholder="Enter institute name... *" required
                               size='small' id = "institute"/>
                </div>
                <div className='form-row'>
                    <label htmlFor="project-name">Project Name: </label>
                    <input placeholder="Enter project name... *" required
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
                <p><Link to = "/login">Account already exists?</Link></p>
            </form>
        </div>
    );
};

export default Register;