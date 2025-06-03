const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect('mongodb://localhost:27017/gestionProyectos')
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error(err));

app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});