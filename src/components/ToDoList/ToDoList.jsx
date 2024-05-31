import React, {useEffect} from 'react';
import {useState} from "react";
import './ToDoList.css'
import TaskCard from "../TaskCard/TaskCard.jsx";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {collection} from "@firebase/firestore";
import {auth, db} from "../firebase.jsx";
import {doc, getDocs} from "firebase/firestore"


const ToDoList = ({userId}) => {
    
    const [tasks, setTasks] = useState([]);
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

    const query = userId ? collection(db, `Users/${userId}/goals`) : null;
    const [docs, loading, error] = useCollectionData(query);

    const getUserGoals = async() => {
        docs ? setTasks(docs) : setTasks([]);
    }

    useEffect(() => {
        getUserGoals();
    }, [docs]);


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
                        <TaskCard key = {task.id} name = {task.name} status = {task.completed} onDelete = {deleteTask}/>
                    )
                })}
            </div>
        </div>
    );
};

export default ToDoList;