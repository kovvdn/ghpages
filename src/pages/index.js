import React from 'react'
import { graphql } from 'gatsby'

import PostCard from '../components/postCard'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h2>Latest Posts:</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostCard key={node.id} post={node} />
    ))}
  </Layout>
)

export default IndexPage

export const PostsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
