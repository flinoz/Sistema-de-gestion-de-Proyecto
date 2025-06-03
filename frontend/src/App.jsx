import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthForm from './components/AuthForm';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    // Verificar si hay un token al cargar la app
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            fetchProjects();
        }
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await axios.get('/api/projects');
            setProjects(res.data);
        } catch (err) {
            console.error('Error al obtener proyectos:', err);
        }
    };

    const createProject = async (project) => {
        try {
            const res = await axios.post('/api/projects', project);
            setProjects([...projects, res.data]);
        } catch (err) {
            console.error('Error al crear proyecto:', err);
        }
    };

    const handleSelectProject = (project) => {
        setSelectedProject(project);
    };

    const handleAuth = (status) => {
        setIsLoggedIn(status);
    };

    return (
        <div style={{ padding: '20px' }}>
            {!isLoggedIn ? (
                <AuthForm onAuth={handleAuth} />
            ) : (
                <>
                    <h1>Sistema de Gestión de Proyectos</h1>
                    <ProjectForm onCreate={createProject} />
                    <ProjectList projects={projects} onSelect={handleSelectProject} />

                    {selectedProject && (
                        <>
                            <h2>Tareas para {selectedProject.name}</h2>
                            <TaskForm projectId={selectedProject._id} />
                            <TaskList projectId={selectedProject._id} />
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default App;