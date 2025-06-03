const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
};

exports.getTasksByProject = async (req, res) => {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
};