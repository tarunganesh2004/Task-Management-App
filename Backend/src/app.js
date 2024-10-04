require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(cors());
app.use(express.json());

// User routes
app.use('/api/users', userRoutes);

// Task routes
app.use('/api', taskRoutes);  // Handles /users/:userId/tasks and /tasks/:taskId

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
