import React, {useEffect, useState} from 'react';
import './TwoColumnContent.css'
import ToDoList from "../ToDoList/ToDoList.jsx";
import Button from "../Button/Button.jsx";
import {auth, db} from "../firebase.jsx"
import {doc, getDoc} from "firebase/firestore"


const TwoColumnContent = () => {
    const handleUploadButtonClick = () => {
        console.log("UPLOAD");
    }

    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async() => {
        auth.onAuthStateChanged((async(user) => {
            const docRef = doc(db, "Users", user.uid);
            const reqDoc = await getDoc(docRef);
            if(reqDoc.exists()) {
                setUserDetails(reqDoc.data());
            }
            else {
                console.log("User not logged in");
            }
        }))
    }

    useEffect(() => {
        fetchUserData();
    }, []);


    return (
        <div className="content-container">
            <div className="project-details">
                <div className='project-basic'>
                    <h3 className = 'section-heading'>Your Project</h3>
                    <h1 className = 'project-name'>{`${userDetails ? userDetails.projectName : ''}`}</h1>
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
                        <Button text = "Upload" buttonClass = "upload button" clickHandler = {handleUploadButtonClick}/>
                    </div>
                </div>
            </div>
            <div className="right-sidebar">
                <div className="project-history">
                    <h3 className='right-sidebar-heading'>Project History</h3>
                    <p>Started: {`${userDetails ? userDetails.startDate : ''}`}</p>
                    <p>Projected End: {`${userDetails ? userDetails.endDate : ''}`}</p>
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