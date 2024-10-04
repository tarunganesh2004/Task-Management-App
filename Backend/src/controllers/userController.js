const db = require('../db');

// Fetch all users
exports.getUsers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Database error: ' + err });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ message: 'User created', id: result[0].insertId });
    } catch (err) {
        res.status(500).json({ error: 'Database error: ' + err });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Database error: ' + err });
    }
};
