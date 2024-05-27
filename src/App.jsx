import React from 'react';
import "./App.css"

import Login from "./pages/Login/Login.jsx"
import Feedback from "./pages/Feedback/Feedback.jsx"
import YourProfile from "./pages/YourProfile/YourProfile.jsx"
import ProjectGoals from "./pages/ProjectGoals/ProjectGoals.jsx"
import LogOut from "./pages/LogOut/LogOut.jsx"
import Home from "./pages/Home/Home.jsx"
import Register from "./pages/Register/Register.jsx";

import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <div className = "app-container">
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/register" element = {<Register/>}/>
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