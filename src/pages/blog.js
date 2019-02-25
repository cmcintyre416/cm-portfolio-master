import React from "react";
import PostLink from "../components/blogPosts";
import styled from 'styled-components';

const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 3.333%;
  width: 95%;
  margin: 0 auto;
`;

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return  <BlogPosts>
            {Posts}
          </BlogPosts>
}

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            title
            path
            image
          }
        }
      }
    }
  }
`