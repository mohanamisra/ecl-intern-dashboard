import React from 'react';
import './ProjectGoals.css'
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";

const ProjectGoals = () => {
    return (
        <div className='project-goals-container'>
            <Sidebar/>
            <div className="main">
                <Header/>
            </div>

        </div>
    );
};

export default ProjectGoals;