import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import { generateUniqueId } from '../utils/helpers';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput.trim()) {
            const newTask = {
                id: generateUniqueId(),
                text: taskInput,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setTaskInput('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="home-container">
            <h1 className="text-2xl font-bold">Smart To-Do List</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a new task"
                className="task-input"
            />
            <button onClick={addTask} className="add-task-button">Add Task</button>
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
        </div>
    );
};

export default Home;