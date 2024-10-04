const db = require('../db');

// Get all tasks for a user
exports.getTasks = async (req, res) => {
    const { userId } = req.params;
    try {
        const [tasks] = await db.query('SELECT * FROM tasks WHERE user_id = ?', [userId]);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Database error: ' + err });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    const { userId } = req.params;
    const { title, description, due_date } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO tasks (title, description, due_date, user_id) VALUES (?, ?, ?, ?)',
            [title, description, due_date, userId]
        );
        res.status(201).json({ message: 'Task created', taskId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: 'Database error: ' + err });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { title, description, status, due_date } = req.body;
    try {
        await db.query(
            'UPDATE tasks SET title = ?, description = ?, status = ?, due_date = ? WHERE id = ?',
            [title, description, status, due_date, taskId]
        );
        res.json({ message: 'Task updated' });
    } catch (err) {
        res.status(500).json({ error: 'Database error: ' + err });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        await db.query('DELETE FROM tasks WHERE id = ?', [taskId]);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Database error: ' + err });
    }
};
