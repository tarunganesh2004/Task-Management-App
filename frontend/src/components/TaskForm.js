import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './TaskForm';

const TaskList = ({ userId }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`/api/users/${userId}/tasks`)
            .then(res => setTasks(res.data))
            .catch(err => console.error(err));
    }, [userId]);

    const handleDelete = (taskId) => {
        axios.delete(`/api/tasks/${taskId}`)
            .then(() => setTasks(tasks.filter(task => task.id !== taskId)))
            .catch(err => console.error(err));
    };

    return (
        <div className="container">
            <h3>User Tasks</h3>
            <TaskForm userId={userId} setTasks={setTasks} tasks={tasks} />
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{task.title} - {task.status}</span>
                        <div>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
