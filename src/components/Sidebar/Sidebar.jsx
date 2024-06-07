import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar-wrapper">
            <div className="hamburger-menu" onClick={toggleSidebar}>
                {isOpen ? <CloseIcon className= "icon"/> : <MenuIcon className = "icon"/>}
            </div>
            <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-heading">
                    <DashboardIcon id='dashboard-icon' />
                    <h1>Dashboard</h1>
                </div>
                <ul>
                    <li><Link to="/home" className='Link'>Home</Link></li>
                    <li><Link to="/projectgoals" className='Link'>Project Goals</Link></li>
                    <li><Link to="/feedback" className='Link'>Feedback</Link></li>
                    <li><Link to="/yourprofile" className='Link'>Your Profile</Link></li>
                    <li><Link to="/logout" className='Link'>Log Out</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
