import React from 'react';
import './YourProfile.css'
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";

const YourProfile = () => {
    return (
        <div className = 'profile-container'>
            <Sidebar/>
            <div className="main">
                <Header/>
                <div className = 'content-section'>

                </div>
            </div>
        </div>
    );
};

export default YourProfile;