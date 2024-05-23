import React from 'react';
import './Feedback.css'
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";

const Feedback = () => {
    return (
        <div className = 'feedback-container'>
            <Sidebar/>
            <div className = 'main'>
                <Header/>
                <div className = 'content-section'>

                </div>
            </div>
        </div>
    );
};

export default Feedback;