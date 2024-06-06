import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../components/firebase.jsx";
import { doc, getDoc, getDocs, collection, addDoc, deleteDoc } from "firebase/firestore";
import ToDoList from "../../components/ToDoList/ToDoList.jsx";
import Button from "../../components/Button/Button.jsx";
import './InternDetails.css';

const InternDetails = () => {
    const { supervisorName, internId } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [institute, setInstitute] = useState('');
    const [project, setProject] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const [history, setHistory] = useState(null);

    const fetchInternDetails = async () => {
        const internRef = await getDoc(doc(db, "Users", internId));
        const internData = internRef.data();
        setName(internData.username);
        setEmail(internData.email);
        setInstitute(internData.instituteName);
        setProject(internData.projectName);
        setStart(internData.startDate);
        setEnd(internData.endDate);

        const historyRef = await getDocs(collection(db, "Users", internId, "history"));
        const allHistory = historyRef.docs.map(val => ({ ...val.data(), id: val.id }));
        setHistory(allHistory);
    }

    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
    }

    const handleInternDelete = async () => {
        if (window.confirm("Are you sure you want to remove this intern from the database? WARNING: THIS WILL REMOVE ALL THE DATA RELATED TO THE INTERN PERMANENTLY")) {
            const delRef = await doc(db, "Users", internId);
            deleteDoc(delRef);
            navigate(-1);
        }
    }

    const handleFeedbackSend = async () => {
        setText('');

        const feedbackRef = await collection(db, "Users", internId, "feedback");
        await addDoc(feedbackRef, {
            supervisorName: supervisorName,
            feedback: text,
        });
        alert("Feedback sent!");
    }

    useEffect(() => {
        fetchInternDetails();
    }, [])

    return (
        <div className='intern-view'>
            <div className="all-details-container">
                <div className="section intern-details">
                    <h3 className="section-heading">Intern Details</h3>
                    <p className="intern-info">Name: {name}</p>
                    <p className="intern-info">Email: {email}</p>
                    <p className="intern-info">Institute: {institute}</p>
                    <p className="intern-info">Project: {project}</p>
                    <p className="intern-info">Start Date: {start}</p>
                    <p className="intern-info">End Date: {end}</p>
                </div>

                <div className="section intern-history">
                    <h3 className="section-heading">Project History</h3>
                    <ul>
                        {history !== null ? history.map(item => {
                            return (
                                <li key={item.id} className="history-item">
                                    <p>{item.text}</p>
                                    <a href={item.imgUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={item.imgUrl} className="history-image" alt="project history"/>
                                    </a>
                                </li>
                            )
                        }) : <p>No Project History</p>}
                    </ul>
                </div>

                <div className="section intern-goals">
                    <h3 className="section-heading">Project Goals</h3>
                    <ToDoList userId={internId}/>
                </div>
            </div>

            <div className="action-section">
                <div className="feedback-section">
                    <textarea className='textfield' onChange={handleTextChange} value={text}></textarea>
                    <Button text="Send" buttonClass="feedback-button" clickHandler={handleFeedbackSend}/>
                </div>
                <div className="delete-section">
                    <Button text="Delete Intern Details" buttonClass="delete-button" clickHandler={handleInternDelete}/>
                </div>
            </div>
        </div>
    );
};

export default InternDetails;
