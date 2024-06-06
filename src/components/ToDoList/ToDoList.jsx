import React, {useEffect} from 'react';
import {useState} from "react";
import './ToDoList.css'
import TaskCard from "../TaskCard/TaskCard.jsx";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth, db} from "../firebase.jsx";
import {setDoc, doc, query, collection, addDoc, updateDoc, getDocs, deleteDoc, getDoc} from "firebase/firestore"


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

        try {
            await addDoc(collection(db, `Users/${userId}/goals`), newTask);
            setNewTaskName("");
        } catch(e) {
            console.log(e.message);
        }
    }

    async function deleteTask(delIndex) {
        if(window.confirm("Are you sure you want to delete this task?")) {
            const delVal = await doc(db, "Users", userId, "goals", delIndex);
            deleteDoc(delVal);
        }
    }

    async function doneTask(updateIndex) {
        const updateVal = await doc(db, "Users", userId, "goals", updateIndex);
        const oldTask = (await getDoc(updateVal)).data();
        const newTask = {...oldTask, completed : !oldTask.completed}
        await updateDoc(updateVal, newTask);
    }

    const query = userId ? collection(db, `Users/${userId}/goals`) : null;
    const [docs, loading, error] = useCollectionData(query);

    useEffect(() => {
        // getUserGoals();

        const getData = async() => {
            const dbVal = await getDocs(collection(db, "Users", userId, "goals"));
            setTasks(dbVal.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        getData();
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
                        <TaskCard key = {task.id} id = {task.id} name = {task.name} status = {task.completed} onDelete = {deleteTask} onDone = {doneTask}/>
                    )
                }) : <p className = "task-notif">No tasks to show. Add a task to get started!</p>}
            </div>
        </div>
    );
};

export default ToDoList;