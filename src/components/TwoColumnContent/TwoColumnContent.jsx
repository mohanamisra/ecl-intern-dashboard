import React, {useEffect, useState} from 'react';
import './TwoColumnContent.css'
import Button from "../Button/Button.jsx";
import {auth, db, imageDB} from "../firebase.jsx"
import {doc, getDoc, getDocs, collection, addDoc} from "firebase/firestore"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"


const TwoColumnContent = () => {
    const [img, setImg] = useState(null);
    const [text, setText] = useState('');
    const [feedbacks, setFeedbacks] = useState(null);

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
    }
    const handleUploadButtonClick = () => {
        if(img === null) return;
        const imgRef = ref(imageDB, `images/${img.name + v4()}`);
        uploadBytes(imgRef, img)
            .then((data) => {
                alert("Screenshot Uploaded");
                getDownloadURL(data.ref).then(async(val) => {
                    await setImg(val);
                    const valRef = collection(db, "Users", userId, "history");
                    await addDoc(valRef, {
                        text: text,
                        imgUrl: val,
                    });
                })
            })
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
                const feedbacksRef = await getDocs(collection(db, "Users", user.uid, "feedback"));
                const allFeedbacks = feedbacksRef.docs.map(item => ({...item.data(), id: item.id}));
                setFeedbacks(allFeedbacks);
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
                    <h3 className='section-heading'>Daily Snapshot: </h3>
                    <div className='daily-snapshot-container'>
                        <textarea className='textfield' onChange = {handleTextChange}></textarea>
                        <input type="file" onChange={(e) => setImg(e.target.files[0])}/>
                        <Button text="Upload" buttonClass="upload button"
                                clickHandler={handleUploadButtonClick}/>
                    </div>
                </div>
                <div className='feedback-section'>
                    <h3 className='section-heading'>Latest Feedback:</h3>
                    <ul>
                        {feedbacks === null ? <p>No feedbacks yet</p> :
                            feedbacks.map(feedback => (
                                <li key={feedback.id}>
                                    {feedback.feedback}<br/>
                                    <span className = 'feedback-byline'>{feedback.supervisorName}</span>
                                </li>
                            ))}
                    </ul>
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
                {/*<div className = 'quote-section'>*/}
                {/*    <h3 className = 'right-sidebar-heading'>Today's Mantra</h3>*/}
                {/*    <p className = 'quote'>"Life is a highway."</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default TwoColumnContent;