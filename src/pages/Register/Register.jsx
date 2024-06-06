import React from 'react';
import Password from "../../components/Password/Password.jsx";
import Button from "../../components/Button/Button.jsx"
import './Register.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../../components/firebase.jsx";
import {setDoc, doc} from "firebase/firestore"
import boy_image from '../../assets/boy_intern_image.webp'
import girl_image from '../../assets/girl_intern_image.webp'


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [institute, setInstitute] = useState('');
    const [project, setProject] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newInstitute, setNewInstitute] = useState('');
    const [newProject, setNewProject] = useState('');
    const [newStart, setNewStart] = useState('');
    const [newEnd, setNewEnd] = useState('');

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newConfirmPassword, setNewConfirmPassword] = useState('');

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setNewConfirmPassword(e.target.value)
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        if (newStart !== null && newEnd !== null && newPassword !== "" && newPassword === newConfirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, newEmail, newPassword);
                const user = auth.currentUser;
                if(user) {
                    await setDoc(doc(db, "Users", user.uid), {
                        email: user.email,
                        username: newName,
                        instituteName: newInstitute,
                        projectName: newProject,
                        startDate: newStart,
                        endDate: newEnd,
                    });
                }
                setName(newName);
                setEmail(newEmail);
                setInstitute(newInstitute);
                setProject(newProject);
                setPassword(newPassword)
                setStart(newStart)
                setEnd(newEnd)

                window.location.href = "/home";
            }catch(error) {
                console.log(error.message);
            }
        }
        else {
            alert("Password and confirm password fields are different");
        }
    }

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
    }
    const handleInstituteChange = (e) => {
        setNewInstitute(e.target.value);
    }
    const handleProjectChange = (e) => {
        setNewProject(e.target.value);
    }
    const handleStartChange = (e) => {
        setNewStart(e.target.value);
    }
    const handleEndChange = (e) => {
        setNewEnd(e.target.value);
    }

    return (
        <div className='register-container'>
            <img src={boy_image} alt="Boy Intern" className="intern-image"/>
            <form action="" className="register-form" onSubmit={handleRegister}>
                <h1 className='form-heading'>Intern Register</h1>
                <div className='form-row'>
                    <label htmlFor="name">Name: </label>
                    <input placeholder="Enter name... *" required
                           size='small' id="name" onChange={handleNameChange}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="email">Email: </label>
                    <input placeholder="Enter email... *" required
                           size='small' type="email" id="email"
                           onChange={handleEmailChange}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="institute">Institute: </label>
                    <input placeholder="Enter institute name... *" required
                           size='small' id="institute"
                           onChange={handleInstituteChange}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="project-name">Project Name: </label>
                    <input placeholder="Enter project name... *" required
                           size='small' id="project-name"
                           onChange={handleProjectChange}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="start">Start Date: </label>
                    <input id="start" type="date" onChange={handleStartChange}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="end">End Date: </label>
                    <input type="date" id="end" onChange={handleEndChange}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="password">Password: </label>
                    <Password id="password"
                              handlePasswordChange={handlePasswordChange} value = {password}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <Password id="confirm-password"
                              handlePasswordChange={handleConfirmPasswordChange}/>
                </div>
                <Button text="Register" buttonClass="register button"/>
                <p><Link to="/login">Account already exists?</Link></p>
                <p><Link to="/supervisorlogin">I am a supervisor</Link></p>
            </form>
            <img src={girl_image} alt="Girl Intern"
                 className="intern-image"/>
        </div>
    );
};

export default Register;
