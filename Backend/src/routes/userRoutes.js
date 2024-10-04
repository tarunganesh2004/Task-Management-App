const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser } = require('../controllers/userController');

// GET all users
router.get('/', getUsers);

// POST a new user
router.post('/', createUser);

// DELETE a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
