import React from 'react';
import './LogOut.css';
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import Button from "../../components/Button/Button.jsx"
import {auth} from "../../components/firebase.jsx"

const LogOut = () => {
    const handleLogout = async() => {
        try {
            await auth.signOut();
            window.location.href = "/login";
        }catch(error) {
            alert('ERROR LOGGING OUT ',error.message);
        }
    }

    return (
        <div className = 'logout-container'>
            <Sidebar/>
            <div className="main">
                <Header/>
                <div className="content-section">
                    <Button buttonClass="button logout" text = "Log Out" clickHandler={handleLogout}/>
                </div>
            </div>
        </div>
    );
};

export default LogOut;