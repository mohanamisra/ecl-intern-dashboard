import React from 'react';
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
import TwoColumnContent
    from "./components/TwoColumnContent/TwoColumnContent.jsx";

const App = () => {
    return (
        <div className = "dashboard-container">
            <Sidebar/>
            <div className = "main">
                <Header/>
                <TwoColumnContent/>
            </div>
        </div>
    );
};

export default App;