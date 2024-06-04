import '../Login/Login.css'
import './SupervisorLogin.css'
import React from 'react';
import Password from "../../components/Password/Password.jsx";
import Button from "../../components/Button/Button.jsx";
import {Link} from "react-router-dom";
import female_boss from "../../assets/female_boss.png"
import male_boss from "../../assets/male_boss.png"
const SupervisorLogin = () => {
    return (
        <div className='supervisor-login-container'>
            <img src={female_boss} alt="female boss"
                 className="boss-img female-boss"/>
            <form action="" className="supervisor-login-form">
                <h1 className='form-heading'>Supervisor Login</h1>
                <div className='form-row'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" required
                           placeholder="Enter name..."/>
                </div>
                <div className='form-row'>
                    <label htmlFor="code">Code: </label>
                    <input type="text" id="code" required
                           placeholder="Enter supervisor code..."/>
                </div>
                <Button text="Login as Supervisor" buttonClass="login button"/>
                <p><Link to="/forgot-password">Forgot code?</Link></p>
                <p><Link to="/register">New intern?</Link></p>
            </form>
            <img src={male_boss} alt="male boss" className="boss-img"/>
        </div>
    );
};

export default SupervisorLogin;