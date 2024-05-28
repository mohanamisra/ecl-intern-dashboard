import React from 'react';
import Password from "../../components/Password/Password.jsx";
import Button from "../../components/Button/Button.jsx"
import {useState} from "react";
import './Login.css'
import {Link} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../components/firebase.jsx";

const Login = () => {

    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        setEmail(newEmail);
        setPassword(newPassword);

        try {
            await signInWithEmailAndPassword(auth, newEmail, newPassword);
            window.location.href = "/home";
            console.log("Successful");
        }catch(error) {
            console.log(error.message);
        }
    }

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
    }

    return (
        <div className = 'login-container'>
            <div className="general-header">
            </div>

            <form action="" className="login-form" onSubmit = {handleLogin}>
                <h1 className = 'form-heading'>Intern Login</h1>
                <div className = 'form-row'>
                    <label htmlFor="email">Email: </label>
                    <input type = "text" id = "email" required
                           placeholder = "Enter email..." onChange={handleEmailChange}
                            value = {newEmail}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="password">Password: </label>
                    <Password id = "password" handlePasswordChange={handlePasswordChange}/>
                </div>
                <Button text = "Login" buttonClass="login button"/>
                <p>Forgot Password?</p>
                <p><Link to = "/register">New user?</Link></p>
            </form>
        </div>
    );
};

export default Login;