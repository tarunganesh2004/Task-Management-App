import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ userId, setTasks, tasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { title, description, due_date: dueDate };

        axios.post(`/api/users/${userId}/tasks`, newTask)
            .then(res => {
                setTasks([...tasks, { ...newTask, id: res.data.taskId }]);
                setTitle('');
                setDescription('');
                setDueDate('');
            })
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Task Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Due Date</label>
                <input
                    type="date"
                    className="form-control"
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add Task</button>
        </form>
    );
};

export default TaskForm;
