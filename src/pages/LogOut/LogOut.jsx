import React from 'react';
import './LogOut.css';
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";

const LogOut = () => {
    return (
        <div className = 'logout-container'>
            <Sidebar/>
            <div className="main">
                <Header/>
                <div className="content-section">

                </div>
            </div>
        </div>
    );
};

export default LogOut;