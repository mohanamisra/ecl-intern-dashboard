import React from 'react';
import Button from "../../components/Button/Button.jsx"
import {useState} from "react";
import './Login.css'
import {Link} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../components/firebase.jsx";
import boy_image from '../../assets/boy_intern_image.webp'
import girl_image from '../../assets/girl_intern_image.webp'
import { Visibility, VisibilityOff } from "@mui/icons-material";


const Login = () => {


    const [showPassword, setShowPassword] = useState(false);

    if(showPassword == null)
        setShowPassword(false);

    const handleVisibilityChange = () => {
        const newShowPassword = !showPassword;
        setShowPassword(newShowPassword);
    }

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
        }catch(error) {
            console.log(error.message);
        }
    }

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
    }

    return (
        <div className='login-container'>
            <img src={boy_image} alt="Boy Intern" className="intern-image"/>
            <form action="" className="login-form" onSubmit={handleLogin}>
                <h1 className='form-heading'>Intern Login</h1>
                <div className='form-row'>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" required
                           placeholder="Enter email..."
                           onChange={handleEmailChange}
                           value={newEmail}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="password">Password: </label>
                    <div className='password-container'>
                        <input id = "password" required
                            type={showPassword ? `text` : `password`}
                               placeholder="Enter password..."
                               onChange={handlePasswordChange}
                               className='password-field'/>
                        {showPassword ?
                            <Visibility onClick={handleVisibilityChange}
                                        className="eye"/> :
                            <VisibilityOff onClick={handleVisibilityChange}
                                           className="eye"/>}
                    </div>
                </div>
                <Button text="Login" buttonClass="login button"/>
                <p><Link to="/forgot-password">Forgot Password?</Link></p>
                <p><Link to="/register">New intern?</Link></p>
                <p><Link to="/supervisorlogin">I am a supervisor</Link></p>
            </form>
            <img src={girl_image} alt="Girl Intern"
                 className="intern-image"/>
        </div>
    );
};

export default Login;
