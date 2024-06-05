import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {db} from "../../components/firebase.jsx";
import {doc, getDoc} from "firebase/firestore";
import ToDoList from "../../components/ToDoList/ToDoList.jsx";
import './InternDetails.css'

const InternDetails = () => {
    const {internId} = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [institute, setInstitute] = useState('');
    const [project, setProject] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const fetchInternDetails = async() => {
        const internRef = await getDoc(doc(db, "Users", internId));
        setName(internRef.data().username);
        setEmail(internRef.data().email);
        setInstitute(internRef.data().instituteName);
        setProject(internRef.data().projectName);
        setStart(internRef.data().startDate);
        setEnd(internRef.data().endDate);
    }

    useEffect(() => {
        fetchInternDetails();
    },[])

    return (
        <div className = "all-details-container">
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
                <div>Project history goes here</div>
            </div>

            <div className="section intern-goals">
                <h3 className="section-heading">Project Goals</h3>
                <ToDoList userId = {internId}/>
            </div>
        </div>
    );
};

export default InternDetails;