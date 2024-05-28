import React, {useEffect, useState} from 'react';
import './Header.css'
import dp from "../../assets/dp.jpg"
import {auth, db} from "../firebase.jsx"
import {doc, getDoc} from "firebase/firestore"

const Header = () => {
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
        <div className="header-container">
            <div className = "left">
                <div className = 'image-container'>
                    <img src={dp} alt=""/>
                </div>
                <div className = 'welcome'>{`Hello, ${userDetails ? userDetails.username : ''}`}</div>
            </div>
            <div className = "right date">Wed, 22nd May, 2024</div>
        </div>
    );
};

export default Header;