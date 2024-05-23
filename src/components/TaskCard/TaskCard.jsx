import React from 'react';
import './TaskCard.css'

const TaskCard = ({name, status}) => {
    return (
        <div className = 'task-card'>
            <div className='task-top'>
                {status === true ?
                    <input type="checkbox" className='checkbox' checked/> :
                    <input type="checkbox" className='checkbox'/>}
                <p className='task-name'>{name}</p>
            </div>
            <button className = 'delete-button'>Delete</button>
        </div>
    );
};

export default TaskCard;