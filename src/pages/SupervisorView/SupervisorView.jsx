import React, {useState, useEffect} from 'react'
import {db} from "../../components/firebase.jsx"
import {getDocs, collection} from "firebase/firestore"
import './SupervisorView.css'
import Button from "../../components/Button/Button.jsx";

const SupervisorView = () => {
    const [interns, setInterns] = useState([]);

    const fetchInternsList = async() => {
        const docsRef = await getDocs(collection(db, "Users"));
        const newInternsList = [];
        docsRef.forEach(doc => {
            const newIntern = doc.data();
            newInternsList.push(newIntern);
        })
        setInterns(newInternsList);
    }

    const handleDetailsClick = () => {
        console.log("click");
    }

    useEffect(() => {
        fetchInternsList();
    },[]);

    return (
        <div>
            <p>All Interns</p>
            <ul>
                {interns.map(intern => {
                    return (
                        <li key = {intern.email}>{intern.username} <Button text = "View Details" buttonClass={"details-button"} clickHandler={handleDetailsClick}/></li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SupervisorView;