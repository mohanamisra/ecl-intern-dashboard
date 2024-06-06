import React from 'react';
import {useState, useEffect} from "react";
import './TaskCard.css'

const TaskCard = ({id, name, status, onDelete, onDone}) => {
    const [done, setDone] = useState(status);

    useEffect(() => {
        setDone(status);
    }, [status]);

    const handleCheckBoxChange = () => {
        onDone(id);
        setDone(!done);
    }

    const handleDeleteTask = () => {
        onDelete(id);
    }

    return (
        <div className = {`task-card ${done? 'checked': 'not-checked'}`}>
            <div className='task-top'>
                    <input type="checkbox" className='checkbox' checked = {done} onChange = {handleCheckBoxChange}/>
                <p className='task-name'>{name}</p>
            </div>
            <button className = 'delete-button' onClick = {handleDeleteTask}>Delete</button>
        </div>
    );
};

export default TaskCard;