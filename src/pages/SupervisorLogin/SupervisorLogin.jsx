import '../Login/Login.css'
import './SupervisorLogin.css'
import React, {useState} from 'react';
import Button from "../../components/Button/Button.jsx";
import {Link} from "react-router-dom";
import female_boss from "../../assets/female_boss.webp"
import male_boss from "../../assets/male_boss.webp"
import {db} from "../../components/firebase.jsx";
import {collection, getDocs} from "firebase/firestore"

const SupervisorLogin = () => {

    const [supervisorName, setSupervisorName] = useState('');
    const [code, setCode] = useState('');
    const handleSupervisorLogin = async(e) => {
        e.preventDefault();
        let flag = 0;

        const querySnapshot = await getDocs(collection(db, "supervisors"));
        querySnapshot.forEach(doc => {
            if(supervisorName === doc.data().name) {
                flag = 1;
                console.log(doc.data());
                if(code === doc.data().code) {
                    window.location.href = `supervisorview/${supervisorName}`;
                    return;
                }
                else {
                    alert("Incorrect Code: Please re-enter!");
                    return;
                }
            }
        })
        flag === 0 ? alert("Incorrect details: Please re-enter!") : null;
    }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setSupervisorName(newName);
    }

    const handleCodeChange = (e) => {
        const newCode = e.target.value;
        setCode(newCode);
    }

    return (
        <div className='supervisor-login-container'>
            <img src={female_boss} alt="female boss"
                 className="boss-img female-boss"/>
            <form action="" className="supervisor-login-form">
                <h1 className='form-heading'>SupervisorView Login</h1>
                <div className='form-row'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" required
                           placeholder="Enter name..." onChange = {handleNameChange}/>
                </div>
                <div className='form-row'>
                    <label htmlFor="code">Code: </label>
                    <input type="text" id="code" required
                           placeholder="Enter supervisor code..." onChange={handleCodeChange}/>
                </div>
                <Button text="Login as Supervisor" buttonClass="login button" clickHandler={handleSupervisorLogin}/>
                <p><Link to="/forgot-password">Forgot code?</Link></p>
                <p><Link to="/login">I am an intern</Link></p>
            </form>
            <img src={male_boss} alt="male boss" className="boss-img"/>
        </div>
    );
};

export default SupervisorLogin;