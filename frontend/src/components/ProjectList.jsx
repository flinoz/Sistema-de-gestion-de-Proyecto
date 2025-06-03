import React from 'react';

function ProjectList({ projects, onSelect }) {
    return (
        <ul>
            {projects.map(project => (
                <li key={project._id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <strong>{project.name}</strong>
                    <p>{project.description || 'Sin descripción'}</p>
                    <button onClick={() => onSelect(project)}>Seleccionar</button>
                </li>
            ))}
        </ul>
    );
}

export default ProjectList;