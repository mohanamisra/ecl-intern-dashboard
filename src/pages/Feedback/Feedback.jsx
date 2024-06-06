import React, { useState, useEffect } from 'react';
import './Feedback.css';
import { db } from "../../components/firebase.jsx";
import { collection, getDocs } from "firebase/firestore";
import { auth } from "../../components/firebase.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState(null);

    const fetchUserFeedbacks = () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const feedbacksRef = await getDocs(collection(db, "Users", user.uid, "feedback"));
                const allFeedbacks = feedbacksRef.docs.map(item => ({ ...item.data(), id: item.id }));
                setFeedbacks(allFeedbacks);
            }
        });
    };

    useEffect(() => {
        fetchUserFeedbacks();
    }, []);

    return (
        <div className='feedback-container'>
            <Sidebar />
            <div className='main'>
                <Header />
                <div className='content-section'>
                    <ul>
                        {feedbacks === null ? <p>No feedbacks yet</p> :
                            feedbacks.map(feedback => (
                                <li key={feedback.id}>
                                    <strong>Feedback:</strong> {feedback.feedback}<br />
                                    <strong>By:</strong> {feedback.supervisorName}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
