import React from 'react'
import { Link } from 'gatsby'

const Post = ({ post }) => (
  <article>
    <h3>{post.frontmatter.title}</h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    <Link to={post.fields.slug}>Go!</Link>
  </article>
)

export default Post
