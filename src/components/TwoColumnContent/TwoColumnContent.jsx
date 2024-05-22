import React from 'react';
import './TwoColumnContent.css'

const TwoColumnContent = () => {
    return (
        <div className="content-container">
            <div className="project-details">
                <h3>Your Project</h3>
                <h1>XYZ Project Name</h1>
                <h3>Today's Goals:</h3>
                <div className = 'daily-goals-container'>

                </div>
                <h3>Daily Snapshot:</h3>
                <div className ='daily-snapshot-container'>

                </div>
            </div>
            <div className="right-sidebar">
                <div className="project-history">
                    <h3>Project History</h3>
                    <p>Started: </p>
                    <p>Projected End: </p>
                    <p>Tech Stack: </p>
                </div>
                <div className="team-members">
                    <h3>Team Members</h3>
                    <p>John Doe</p>
                    <p>Alice Doe</p>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnContent;