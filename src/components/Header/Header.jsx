import React, { useEffect, useState } from 'react';
import './Header.css';
import dp from "../../assets/dp.jpg";
import { auth, db } from "../firebase.jsx";
import { doc, getDoc } from "firebase/firestore";

const Header = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const [userDetails, setUserDetails] = useState(null);

    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dateNum = currentDate.getDate();

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const reqDoc = await getDoc(docRef);
                if (reqDoc.exists()) {
                    setUserDetails(reqDoc.data());
                }
            }
        });
    };

    const getFirstName = (username) => {
        if (!username) return '';
        const firstWord = username.split(' ')[0];
        return firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="header-container">
            <div className="left">
                <div className="image-container">
                    <img src={dp} alt="User profile" />
                </div>
                <div className="welcome">
                    {`Hello, ${userDetails ? getFirstName(userDetails.username) : ''}`}
                </div>
            </div>
            <div className="right date">
                {day}, {month} {dateNum}
            </div>
        </div>
    );
};

export default Header;
