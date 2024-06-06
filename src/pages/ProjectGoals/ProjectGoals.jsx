import React, {useEffect, useState} from 'react';
import './ProjectGoals.css'
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import ToDoList from "../../components/ToDoList/ToDoList.jsx";
import {auth, db} from "../../components/firebase.jsx"
import {doc, getDoc} from "firebase/firestore"

const ProjectGoals = () => {

    const [userDetails, setUserDetails] = useState(null);
    const [userId, setUserId] = useState('');

    const fetchUserData = async() => {
        auth.onAuthStateChanged((async(user) => {
            const docRef = doc(db, "Users", user.uid);
            const reqDoc = await getDoc(docRef);
            if(reqDoc.exists()) {
                setUserDetails(reqDoc.data());
                setUserId(user.uid);
            }
        }))
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className='project-goals-container'>
            <Sidebar/>
            <div className="main">
                <Header/>
                <div className = "content-section">
                    <ToDoList userId={userId}/>
                </div>
            </div>

        </div>
    );
};

export default ProjectGoals;