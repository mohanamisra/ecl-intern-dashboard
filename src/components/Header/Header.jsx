import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className = "left">
                <div className = 'image-container'>
                    <img src="" alt=""/>
                </div>
                <div className = 'welcome'>Hello Jane Doe!</div>
            </div>
            <div className = "right">Wed, 22nd May, 2024</div>
        </div>
    );
};

export default Header;