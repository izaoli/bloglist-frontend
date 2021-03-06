import React from 'react'

const BlogDetails = ({ blog }) => (
    <div className="card-text">
        <div>{blog.url}</div>
        <div>ID: {blog.id}</div>
        <div>Date: {blog.date}</div>
        <div>Likes: <span className="count-likes">{blog.likes}</span></div>
    </div>
)

export default BlogDetails