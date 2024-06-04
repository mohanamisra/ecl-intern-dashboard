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
    const [userId, setUserId] = useState('');

    const fetchUserData = async() => {
        auth.onAuthStateChanged((async(user) => {
            const docRef = doc(db, "Users", user.uid);
            const reqDoc = await getDoc(docRef);
            if(reqDoc.exists()) {
                setUserDetails(reqDoc.data());
                setUserId(user.uid);
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
                    <h3 className='section-heading'>Your Project</h3>
                    <h1 className='project-name'>{`${userDetails ? userDetails.projectName : ''}`}</h1>
                </div>
                <div className='snapshot-section'>
                    <h3 className='section-heading'>Daily Snapshot:</h3>
                    <div className='daily-snapshot-container'>
                        <textarea className='textfield'></textarea>
                        <Button text="Upload" buttonClass="upload button"
                                clickHandler={handleUploadButtonClick}/>
                    </div>
                </div>
                <div className='feedback-section'>
                    <h3 className='section-heading'>Latest Feedback:</h3>
                </div>
            </div>
            <div className="right-sidebar">
                <div className="project-history">
                    <h3 className='right-sidebar-heading'>Project History</h3>
                    <p>Started: <span
                        className='detail'>{`${userDetails ? userDetails.startDate : ''}`}</span>
                    </p>
                    <p>Projected End: <span
                        className='detail'>{`${userDetails ? userDetails.endDate : ''}`}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnContent;