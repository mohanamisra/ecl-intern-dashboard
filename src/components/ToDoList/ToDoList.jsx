import React from 'react';
import {useState} from "react";
import './ToDoList.css'

const ToDoList = () => {

    const myTasks = [
        {
            name: 'Design landing page',
            completed: true,
        },
        {
            name: 'Reach out to investors',
            completed: true,
        },
        {
            name: 'Ideate colour theme',
            completed: false,
        },
        {
            name: 'Make rudimentary to-do list for goals-section',
            completed: false,
        },
        {
            name: 'Email VC',
            completed: false,
        }
    ]

    const [tasks, setTasks] = useState(myTasks);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function doneTask(index) {

    }

    return (
        <div className = 'to-do-list'>
            <div className = 'new-task'>
                <input
                type = 'text'
                placeholder = 'Create task...'
                value = {newTask}
                onChange = {handleInputChange}
                />
                <button className = 'add-button' onClick = {addTask}>
                    Create
                </button>
            </div>
            <div className = 'tasks-container'>
                <ol>
                    {tasks.map((task, index) => (
                        <li key ={index}>
                            <span>{task.name}</span>
                        </li>
                        ))}

                </ol>
            </div>
        </div>
    );
};

export default ToDoList;