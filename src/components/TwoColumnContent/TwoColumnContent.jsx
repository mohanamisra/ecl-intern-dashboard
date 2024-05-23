import React from 'react';
import './TwoColumnContent.css'
import ToDoList from "../ToDoList/ToDoList.jsx";

const TwoColumnContent = () => {
    return (
        <div className="content-container">
            <div className="project-details">
                <div className='project-basic'>
                    <h3 className = 'section-heading'>Your Project</h3>
                    <h1 className = 'project-name'>Intern Management Dashboard</h1>
                </div>
                <div className='goals-section'>
                    <h3 className='section-heading'>Today's Goals:</h3>
                    <div className='daily-goals-container'>
                        <ToDoList/>
                    </div>
                </div>
                <div className='snapshot-section'>
                    <h3 className = 'section-heading'>Daily Snapshot:</h3>
                    <div className='daily-snapshot-container'>
                        <textarea className = 'textfield'></textarea>
                        <button className="button">Upload</button>
                    </div>
                </div>
            </div>
            <div className="right-sidebar">
                <div className="project-history">
                    <h3 className='right-sidebar-heading'>Project History</h3>
                    <p>Started: </p>
                    <p>Projected End: </p>
                    <p>Tech Stack: </p>
                </div>
                <div className="team-members">
                    <h3 className = 'right-sidebar-heading'>Team Members</h3>
                    <p>John Doe</p>
                    <p>Alice Doe</p>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnContent;