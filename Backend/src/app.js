require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Root route (handles GET requests to `/`)
app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
});

// User and task routes
app.use('/api/users', userRoutes);
app.use('/api', taskRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
