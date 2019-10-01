import React, { Component } from 'react'
import BlogCard from './BlogCard'
import './blogs.css'

export default class Blogs extends Component {

    state = {
        blogs: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/blogs')
            .then(response => response.json())
            .then(blogs => this.setState({blogs: blogs}))
    }

    blogCards = () => {
        return this.state.blogs.map(blog => {
            return <BlogCard key={blog.id} blog={blog} />
        })
    }

    render() {
        console.log(this.state.blogs)
        return (
            <div className='blog-container'>
                {this.blogCards()}
            </div>
        )
    }
}