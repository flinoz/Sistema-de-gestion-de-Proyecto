const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Crear tarea
router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
});

// Obtener tareas por proyecto
router.get('/:projectId', async (req, res) => {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
});

module.exports = router;