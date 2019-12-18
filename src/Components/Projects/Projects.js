import React, { Component } from 'react'
import ProjectContainer from './ProjectContainer'
import './projects.css'
import Spinner from '../Spinner/Spinner'

export default class Projects extends Component {

    state = {
        projects: []
    }

    componentDidMount(){
        fetch('https://personal-website-taylor-stein.herokuapp.com/projects')
            .then(response => response.json())
            .then(projects => this.setState({projects: projects}))
    }

    render() {
        return (
            <div>
                <div className='project-page-title-container'>
                    <h1 className='project-page-title'><img className='project-github-logo' src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github logo' onClick={() => window.open('https://github.com/ChefBoyRT', "_blank")} /></h1>
                </div>
                {this.state.projects.length > 0
                    ? <ProjectContainer projects={this.state.projects} />
                    : <Spinner />
                }
            </div>
        )
    }
}

