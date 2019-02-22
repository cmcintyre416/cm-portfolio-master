import React from "react"
import { graphql } from "gatsby";

export default function Template({data}){
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    totalCount
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        timeToRead
        wordCount {
          words
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
        }
      }
    }
  }
}
`