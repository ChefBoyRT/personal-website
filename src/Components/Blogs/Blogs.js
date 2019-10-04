import React, { Component } from 'react'
import BlogContainer from './BlogContainer'
import './blogs.css'

export default class Blogs extends Component {

    state = {
        blogs: []
    }

    componentDidMount(){
        fetch('https://personal-website-taylor-stein.herokuapp.com/blogs')
            .then(response => response.json())
            .then(blogs => this.setState({blogs: blogs}))
    }

    render() {
        return (
            <div>
                <div className='blog-page-title-container'>
                    <h1 className='blog-page-title'><img className='medium-logo' onClick={()=> window.open("https://medium.com/@taylor.stein09", "_blank")} src='https://pageflows.com/media/logos/medium.jpg' alt='medium logo' /></h1>
                </div>
                <BlogContainer blogs={this.state.blogs} />
            </div>
        )
    }
}