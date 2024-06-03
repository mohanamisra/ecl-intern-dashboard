import React, {useEffect} from 'react';
import {useState} from "react";
import './ToDoList.css'
import TaskCard from "../TaskCard/TaskCard.jsx";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, db} from "../firebase.jsx";
import {setDoc, doc, query, collection, addDoc} from "firebase/firestore"


const ToDoList = ({userId}) => {

    const [tasks, setTasks] = useState([]);
    const [newTaskName, setNewTaskName] = useState("");

    function handleInputChange(event) {
        setNewTaskName(event.target.value);
    }

    async function addTask(e) {
        e.preventDefault();
        const newTask = {
            name: newTaskName,
            completed: false,
        }
        console.log(newTask);

        try {
            await addDoc(collection(db, `Users/${userId}/goals`), newTask);
            setNewTaskName("");
        } catch(e) {
            console.log(e.message);
        }
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
        console.log(index + "done");
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
                {tasks[0] ? tasks.map((task) => {
                    return (
                        <TaskCard key = {task.id} name = {task.name} status = {task.completed} onDelete = {deleteTask}/>
                    )
                }) : <p className = "task-notif">No tasks to show. Add a task to get started!</p>}
            </div>
        </div>
    );
};

export default ToDoList;