import React from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
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
    );
};

export default Sidebar;
