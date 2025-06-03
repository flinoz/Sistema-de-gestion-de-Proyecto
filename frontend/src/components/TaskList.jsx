import React, { useEffect, useState } from 'react';

function TaskList({ projectId }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`/api/tasks/${projectId}`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err));
    }, [projectId]);

    return (
        <ul>
            {tasks.map(task => (
                <li key={task._id} style={{ marginBottom: '10px' }}>
                    <strong>{task.title}</strong>
                    <p>{task.description || 'Sin descripción'}</p>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;