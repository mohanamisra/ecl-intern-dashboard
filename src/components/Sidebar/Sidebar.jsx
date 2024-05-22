import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <h1 className="sidebar-heading">Intern dashboard</h1>
                <ul>
                    <li><a href = "/home">Home</a></li>
                    <li><a href = "/projectgoals">Project Goals</a></li>
                    <li><a href = "/feedback">Feedback</a></li>
                    <li><a href = "/yourprofile">Your Profile</a></li>
                    <li><a href = "/logout">Log Out</a></li>
                </ul>
        </div>
    );
};

export default Sidebar;