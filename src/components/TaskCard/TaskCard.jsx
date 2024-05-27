import React from 'react';
import {useState} from "react";
import './TaskCard.css'

const TaskCard = ({id, name, status, onDelete}) => {
    const [done, setDone] = useState(status);

    const handleCheckBoxChange = () => {
        const newDone = !done;
        setDone(newDone);
    }

    const handleDeleteTask = () => {
        onDelete(id);
    }

    return (
        <div className = {`task-card ${done? 'checked': 'not-checked'}`}>
            <div className='task-top'>
                {status === true ?
                    <input type="checkbox" className='checkbox' checked onChange = {handleCheckBoxChange}/> :
                    <input type="checkbox" className='checkbox' onChange={handleCheckBoxChange}/>}
                <p className='task-name'>{name}</p>
            </div>
            <button className = 'delete-button' onClick = {handleDeleteTask}>Delete</button>
        </div>
    );
};

export default TaskCard;