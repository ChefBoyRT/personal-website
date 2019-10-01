import React from 'react'

export default function BlogCard({ blog }) {
    return (
        <div className='blog-card' onClick={() => window.open(`${blog.link}`, "_blank")}>
            <img className='blog-image' src={blog.image_url} alt={blog.title}/>
            <div className='blog-info'>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <p>Published {blog.publication_date} | Read Time {blog.read_time}</p>
            </div>
        </div>
    )
}
