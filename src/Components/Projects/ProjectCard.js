import React from 'react'

export default function ProjectCard({ project }) {
    return (
        <div className='project-card'>
            <div className='project-header'>
                <img className='project-image' src={project.image_url} alt={project.title} />
            </div>
            <div className='project-info'>
                <h1 className='project-title'>{project.title}</h1>
                <p className='project-description'>{project.description}</p>
                <p className='project-language'>{project.language_1} | {project.language_2}</p>
            </div>
        </div>
    )
}
