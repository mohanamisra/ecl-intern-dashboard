import React, {useState, useEffect} from 'react'
import {db} from "../../components/firebase.jsx"
import {getDocs, collection} from "firebase/firestore"
import './SupervisorView.css'

const SupervisorView = () => {
    const [interns, setInterns] = useState([]);

    const fetchInternsList = async() => {
        const docsRef = await getDocs(collection(db, "Users"));
        const newInternsList = [];
        docsRef.forEach(doc => console.log(doc.data().username));
        docsRef.forEach(doc => {
            const newIntern = doc.data();
            console.log(newIntern);
            newInternsList.push(newIntern);
        })
        setInterns(newInternsList);
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
                        <li key = {intern.email}>{intern.username}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SupervisorView;