import React from 'react';
import './TaskCard.css'

const TaskCard = ({name, status}) => {
    return (
        <div className = 'task-card'>
            <div className='task-top'>
                <input type="checkbox" className='checkbox'/>
                <p className='task-name'>{name}</p>
            </div>
            {/*{status === true? <p className = 'task-status'>Completed</p>:<p className = 'task-status'>Pending</p>}*/}
            <button className = 'delete-button'>Delete</button>
        </div>
    );
};

export default TaskCard;