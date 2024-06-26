import React, {useEffect, useState} from 'react';
import "./App.css"

import Login from "./pages/Login/Login.jsx"
import Feedback from "./pages/Feedback/Feedback.jsx"
import YourProfile from "./pages/YourProfile/YourProfile.jsx"
import ProjectGoals from "./pages/ProjectGoals/ProjectGoals.jsx"
import LogOut from "./pages/LogOut/LogOut.jsx"
import Home from "./pages/Home/Home.jsx"
import Register from "./pages/Register/Register.jsx"
import SupervisorLogin from "./pages/SupervisorLogin/SupervisorLogin.jsx";
import SupervisorView from "./pages/SupervisorView/SupervisorView.jsx";
import InternDetails from "./pages/InternDetails/InternDetails.jsx";
import {auth} from "./components/firebase.jsx"

import {Navigate, Route, Routes} from "react-router-dom";


const App = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
        });
    })

    return (
        <div className = "app-container">
            <Routes>
                {/*<Route path = "/" element = {<Home/>}/>*/}
                <Route path = "/" element = {user ? <Navigate to = "/home"/> : <Login/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/register" element = {<Register/>}/>
                <Route path = "/home" element = {<Home/>}/>
                <Route path="/projectgoals" element = {<ProjectGoals/>}/>
                <Route path="/feedback" element = {<Feedback/>}/>
                <Route path="/yourprofile" element = {<YourProfile/>}/>
                <Route path="/logout" element = {<LogOut/>}/>
                <Route path="/supervisorlogin" element = {<SupervisorLogin/>}/>
                <Route path = "/supervisorview/:supervisorName" element = {<SupervisorView/>}/>
                <Route path = "supervisorview/:supervisorName/intern/:internId" element = {<InternDetails/>}/>
            </Routes>
        </div>
    );
};

export default App;