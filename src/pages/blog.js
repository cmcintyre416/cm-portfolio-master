import React from "react";
import { graphql } from 'gatsby';

import PostLink from "../components/blogPosts";
import Nav from '../components/nav';
import Header from '../components/header';
import BackHome from '../components/backHome';

import { MainWrapper } from '../styles/containers';
import styled from 'styled-components';

const BlogPage = styled.div`

    background-color: #fafafa;

    .header {
      box-shadow: none;
      background-color: transparent;
    }

    h1 {
      text-align: center;
      font-size: 1.8rem;
    }

    .blogNav {
      position: fixed;
      top: 0;
      bottom: 0;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      z-index: 1000;
      
      .minNavButton {
        box-shadow: 3px 0px 3px rgba(0,0,0,0.10), 3px 0px 3px rgba(0,0,0,0.20);
      }
    }

`;

const ContentWrapper = styled.div`
  width: 70%;
  margin: 150px auto;
`;

const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  justify-content: space-between;
`;

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <>
      <BlogPage>
        <Header siteTitle='Blog'/>
        <BackHome/>
        <div className="navContainer blogNav">
          <Nav/>
        </div>
        <MainWrapper>
          <ContentWrapper>
            <BlogPosts>
              {Posts}
            </BlogPosts>
          </ContentWrapper>
        </MainWrapper>
      </BlogPage>
    </>
  );
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
            date(formatString: "MMMM DD, YYYY")
            title
            path
            image
          }
        }
      }
    }
  }
`