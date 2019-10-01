import React from 'react'

export default function BlogCard({ blog }) {
    return (
        <div className='blog-card' onClick={() => window.open(`${blog.link}`, "_blank")}>
            <div className='blog-header'>
                <img className='blog-image' src={blog.image_url} alt={blog.title}/>
            </div>
            <div className='blog-info'>
                <h3 className='blog-title'>{blog.title}</h3>
                <p className='blog-date-time'>Published {blog.publication_date} | Read Time {blog.read_time}</p>
                <p className='blog-description'>{blog.description}</p>
            </div>
        </div>
    )
}
