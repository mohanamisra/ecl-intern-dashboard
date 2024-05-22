import React from 'react';
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
import TwoColumnContent
    from "./components/TwoColumnContent/TwoColumnContent.jsx";

import Feedback from "./pages/Feedback/Feedback.jsx"
import YourProfile from "./pages/YourProfile/YourProfile.jsx"
import ProjectGoals from "./pages/ProjectGoals/ProjectGoals.jsx"
import LogOut from "./pages/LogOut/LogOut.jsx"
import Home from "./pages/Home/Home.jsx"

import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <div className = "app-container">
            {/*<Sidebar/>*/}
            {/*<div className = "main">*/}
            {/*    <Header/>*/}
            {/*    <TwoColumnContent/>*/}
            {/*</div>*/}
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/home" element = {<Home/>}/>
                <Route path="/projectgoals" element = {<ProjectGoals/>}/>
                <Route path="/feedback" element = {<Feedback/>}/>
                <Route path="/yourprofile" element = {<YourProfile/>}/>
                <Route path="/logout" element = {<LogOut/>}/>
            </Routes>
        </div>
    );
};

export default App;