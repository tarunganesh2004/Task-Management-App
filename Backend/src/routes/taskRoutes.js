const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// Get all tasks for a specific user
router.get('/users/:userId/tasks', getTasks);

// Create a new task for a user
router.post('/users/:userId/tasks', createTask);

// Update a task by task ID
router.put('/tasks/:taskId', updateTask);

// Delete a task by task ID
router.delete('/tasks/:taskId', deleteTask);

module.exports = router;
