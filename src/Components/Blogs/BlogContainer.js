import React from 'react'
import BlogCard from './BlogCard'

export default function BlogContainer(props) {
    
    const blogCards = (
        props.blogs.map(blog => {
            return <BlogCard key={blog.id} blog={blog} />
        })
    )

    return (
        <div className='blog-container'>
            {blogCards}
        </div>
    )
}
