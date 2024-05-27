import React from 'react';
import {useState} from "react";
import './ToDoList.css'
import TaskCard from "../TaskCard/TaskCard.jsx";

const ToDoList = () => {

    const myTasks = [
        {
            taskId: 1,
            name: 'Design landing page',
            completed: false,
        },
        {
            taskId: 2,
            name: 'Reach out to investors',
            completed: false,
        },
        {
            taskId: 3,
            name: 'Ideate colour theme',
            completed: false,
        },
        {
            taskId: 4,
            name: 'Make rudimentary to-do list for goals-section',
            completed: false,
        },
        {
            taskId: 5,
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

    function deleteTask(delIndex) {
        if(window.confirm("Are you sure you want to delete this task?")) {
            setTasks(tasks.filter(task => {
                    if (task.taskId !== delIndex)
                        return task;
                }
            ))
        }
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
                {tasks.map((task) => {
                    return (
                        <TaskCard key = {task.taskId} id = {task.taskId} name = {task.name} status = {task.completed} onDelete = {deleteTask}/>
                    )
                })}
            </div>
        </div>
    );
};

export default ToDoList;