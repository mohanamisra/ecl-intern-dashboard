import React from 'react';
import './Button.css'

const Button = ({text, buttonClass, clickHandler}) => {
    return (
        <button className={buttonClass} onClick = {clickHandler}>{text}</button>
    );
};

export default Button;