import React from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <h1 className="sidebar-heading">Intern dashboard</h1>
                <ul>
                    <li><Link to = "/home">Home</Link></li>
                    <li><Link to = "/projectgoals">Project Goals</Link></li>
                    <li><Link to= "/feedback">Feedback</Link></li>
                    <li><Link to = "/yourprofile">Your Profile</Link></li>
                    <li><Link to = "/logout">Log Out</Link></li>
                </ul>
        </div>
    );
};

export default Sidebar;