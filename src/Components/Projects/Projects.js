import React, { Component } from 'react'
import ProjectContainer from './ProjectContainer'
import './projects.css'

export default class Projects extends Component {

    state = {
        projects: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/projects')
            .then(response => response.json())
            .then(projects => this.setState({projects: projects}))
    }

    render() {
        return (
            <div>
                <div className='project-page-title-container'>
                    <h1 className='project-page-title'><img className='project-github-logo' src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github logo' /></h1>
                </div>
                <ProjectContainer projects={this.state.projects} />
            </div>
        )
    }
}

