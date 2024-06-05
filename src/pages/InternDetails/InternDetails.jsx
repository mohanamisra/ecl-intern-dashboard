import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {db} from "../../components/firebase.jsx"
import {doc, getDoc, getDocs, collection, addDoc} from "firebase/firestore"
import ToDoList from "../../components/ToDoList/ToDoList.jsx"
import Button from "../../components/Button/Button.jsx"
import './InternDetails.css'

const InternDetails = () => {
    const {supervisorName, internId} = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [institute, setInstitute] = useState('');
    const [project, setProject] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const [history, setHistory] = useState(null);

    const fetchInternDetails = async() => {
        const internRef = await getDoc(doc(db, "Users", internId));
        setName(internRef.data().username);
        setEmail(internRef.data().email);
        setInstitute(internRef.data().instituteName);
        setProject(internRef.data().projectName);
        setStart(internRef.data().startDate);
        setEnd(internRef.data().endDate);

        const historyRef = await getDocs(collection(db, "Users", internId, "history"));
        const allHistory = historyRef.docs.map(val => ({...val.data(), id: val.id}));
        setHistory(allHistory);
    }

    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
    }

    const handleInternDelete = () => {
        console.log("intern delete");
    }

    const handleFeedbackSend = async() => {
        console.log("send feedback");
        setText('');

        const feedbackRef = await collection(db, "Users", internId, "feedback");
        await addDoc(feedbackRef, {
            supervisorName : supervisorName,
            feedback : text,
        });
    }

    useEffect(() => {
        fetchInternDetails();
    }, [])

    return (
        <div className='intern-vew'>
            <div className="all-details-container">
                <div className="section intern-details">
                    <h3 className="section-heading">Intern Details</h3>
                    <p className="intern-name">{name}</p>
                    <p className="intern-name">{email}</p>
                    <p className="intern-name">{institute}</p>
                    <p className="intern-name">{project}</p>
                    <p className="intern-name">{start}</p>
                    <p className="intern-name">{end}</p>
                </div>

                <div className="section intern-history">
                    <h3 className="section-heading">Project History</h3>
                    <ul>
                        {history !== null ? history.map(item => {
                            return (
                                <li key={item.id}>
                                    <p>{item.text}</p>
                                    <a href={item.imgUrl} target="_blank"><img
                                        src={item.imgUrl} height='200px'
                                        alt="project history image"/></a>
                                </li>
                            )
                        }) : <p>NO PROJECT HISTORY</p>}
                    </ul>
                </div>

                <div className="section intern-goals">
                    <h3 className="section-heading">Project Goals</h3>
                    <ToDoList userId={internId}/>
                </div>
            </div>

            <div className="action-section">
                <div className="feedback-section">
                    <textarea className='textfield'
                              onChange={handleTextChange} value = {text}></textarea>
                    <Button text = {"Send"} buttonClass={"feedback-button"} clickHandler={handleFeedbackSend}/>
                </div>
                <div className="delete-section">
                    <Button text = {"Delete Intern Details"} buttonClass={"delete-button"} clickHandler={handleInternDelete}/>
                </div>
            </div>
        </div>
    );
};

export default InternDetails;