import React, { useState, useEffect } from 'react';
import { db } from "../../components/firebase.jsx";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import './SupervisorView.css';
import Button from "../../components/Button/Button.jsx";

const SupervisorView = () => {
    const navigate = useNavigate();
    const { supervisorName } = useParams();
    const [interns, setInterns] = useState([]);

    const fetchInternsList = async () => {
        const docsRef = await getDocs(collection(db, "Users"));
        const newInternsList = [];
        docsRef.forEach(doc => {
            const newIntern = { ...doc.data(), id: doc.id };
            newInternsList.push(newIntern);
        });
        setInterns(newInternsList);
    };

    const handleDetailsClick = (id) => {
        navigate(`intern/${id}`);
    };

    useEffect(() => {
        fetchInternsList();
    }, []);

    return (
        <div className="supervisor-view-container">
            <h1 className="page-heading">Interns under {supervisorName}</h1>
            <ul className="intern-list">
                {interns.map(intern => (
                    <li key={intern.id} className="intern-item">
                        <span className="intern-name">{intern.username}</span>
                        <Button
                            text="View Details"
                            buttonClass="details-button"
                            clickHandler={() => handleDetailsClick(intern.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupervisorView;