import React from "react";
import { graphql } from 'gatsby';

import PostLink from "../components/blogPosts";
import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';
import PageTitles from '../components/pageTitles';

import { MainWrapper } from '../styles/containers';
import { ContentWrapper } from '../styles/containers';
import styled from 'styled-components';

const BlogPage = styled.div`

    background-color: #fafafa;

    .header {
      min-height: auto;
      text-align: center;
      box-shadow: none;
      background-color: transparent;
      padding-top: 20px;

      .animationLogo {
        width: 50px;
      }
    }

    .blogNav {
      position: fixed;
      top: 0;
      bottom: 0;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      z-index: 4;

      .mainNavWrapper {
        padding-top: 100px;
      }
      
      .minNavButton {
        box-shadow: 3px 0px 3px rgba(0,0,0,0.10), 3px 0px 3px rgba(0,0,0,0.20);
      }
    }
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
        <Header/>
        <div className="navContainer blogNav">
          <Nav/>
        </div>
        <MainWrapper>
          <ContentWrapper>
            <BackHome/>
              <PageTitles pageTitle='Blog' pageSub='Welcome to my blog.' pageDescription="Here are some of my dev thoughts and some cool things I've picked up on the way."/>
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