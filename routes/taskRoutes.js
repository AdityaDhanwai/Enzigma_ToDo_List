const express = require('express');
const router = express.Router();
const {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

router.get('/tasks', getTasks);
router.post('/task', addTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

module.exports = router;
