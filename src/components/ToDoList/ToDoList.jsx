import React from 'react';
import {useState} from "react";
import './ToDoList.css'
import TaskCard from "../TaskCard/TaskCard.jsx";

const ToDoList = () => {

    const myTasks = [
        {
            name: 'Design landing page',
            completed: false,
        },
        {
            name: 'Reach out to investors',
            completed: false,
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
    const [newTaskName, setNewTaskName] = useState("");

    function handleInputChange(event) {
        setNewTaskName(event.target.value);
    }

    function addTask() {
        const newTaskList = [...tasks, {name: newTaskName, completed: false}];
        setTasks(newTaskList);
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
                value = {newTaskName}
                onChange = {handleInputChange}
                />
                <button className = 'add-button' onClick = {addTask}>
                    Create
                </button>
            </div>
            <div className = 'tasks-container'>
                {tasks.map((task, index) => {
                    return (
                        <TaskCard key = {index} name = {task.name} status = {task.completed}/>
                    )
                })}
            </div>
        </div>
    );
};

export default ToDoList;