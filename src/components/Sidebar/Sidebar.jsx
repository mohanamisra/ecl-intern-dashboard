import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <h1 className="sidebar-heading">Intern dashboard</h1>
                <ul>
                    <li>Home</li>
                    <li>Project Goals</li>
                    <li>Feedback</li>
                    <li>Your Profile</li>
                    <li>Log Out</li>
                </ul>
        </div>
    );
};

export default Sidebar;