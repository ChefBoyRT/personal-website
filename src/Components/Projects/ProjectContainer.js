import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectContainer(props) {

    const projectCards = (
        props.projects.map(project => {
            return <ProjectCard key={project.id} project={project} />
        })
    )

    return (
        <div className='project-container'>
            {projectCards}
        </div>
    )
}
