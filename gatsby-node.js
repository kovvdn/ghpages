const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    const templatePath = path.resolve('src/templates/postPage.js')
    graphql(`
      {
        allMarkdownRemark(limit: 50) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node.fields.slug)
        createPage({
          path: node.fields.slug,
          component: templatePath,
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'data',
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    })
  }
}
