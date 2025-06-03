const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);