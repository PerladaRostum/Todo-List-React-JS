import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function HandleInput(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }
    return(
        <div className='main-content'>
            <h1>Todo List</h1>
            <div className='form'>
                <div className='input-container'>                
                    <input type="text" placeholder='Todo task...' value={newTask} onChange={HandleInput} className='input-task'/>
                </div>
                <div className='btn-container'>
                    <button onClick={addTask} className='Add-btn'>Add</button>
                </div>
            </div>
            <div>
                {tasks.map((task, index) =>
                    <div key={index} className='TaskList'>
                        <div className='text-container'>
                            <div className='text'>{task}</div>
                        </div>
                        <div className='btn-container'>
                            <button onClick={() => deleteTask(index)} className='delete-btn'>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TodoList;