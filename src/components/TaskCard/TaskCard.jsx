import React from 'react';
import {useState} from "react";
import './TaskCard.css'

const TaskCard = ({name, status}) => {
    const [done, setDone] = useState(status);

    const handleCheckBoxChange = () => {
        const newDone = !done;
        setDone(newDone);
    }

    return (
        <div className = {`task-card ${done? 'checked': 'not-checked'}`}>
            <div className='task-top'>
                {status === true ?
                    <input type="checkbox" className='checkbox' checked onChange = {handleCheckBoxChange}/> :
                    <input type="checkbox" className='checkbox' onChange={handleCheckBoxChange}/>}
                <p className='task-name'>{name}</p>
            </div>
            <button className = 'delete-button'>Delete</button>
        </div>
    );
};

export default TaskCard;