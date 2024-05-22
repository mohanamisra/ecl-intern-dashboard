import React from 'react';
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar.jsx";

const App = () => {
    return (
        <div className = "dashboard-container">
            <Sidebar/>
            <div className = "main">
                <div className="header">

                </div>
                <div className="content">
                    <div className="project-details">

                    </div>
                    <div className="right-sidebar">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;