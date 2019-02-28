import React from "react";
import { graphql } from 'gatsby';

import PostLink from "../components/blogPosts";
import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';

import { MainWrapper } from '../styles/containers';
import {darkHoverBlue, darkBlue} from '../styles/colours';
import styled from 'styled-components';

import Icon from '../images/backgroundTopography.svg';

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
      z-index: 1000;

      .mainNavWrapper {
        padding-top: 100px;
      }
      
      .minNavButton {
        box-shadow: 3px 0px 3px rgba(0,0,0,0.10), 3px 0px 3px rgba(0,0,0,0.20);
      }
    }

`;

const ContentWrapper = styled.div`
  width: 70%;
  margin: 60px auto;
  position: relative;
`;

const PageTitleHeader = styled.div`
  margin-bottom: 110px;
  position: relative;
  background-color: ${darkHoverBlue};
  padding: 50px 0;
  border-radius: 5px;
  background: linear-gradient(-45deg, ${darkHoverBlue}, ${darkBlue});
  background-size: 650% 650%;
  -webkit-animation: Gradient 20s ease infinite;
  -moz-animation: Gradient 20s ease infinite;
  animation: Gradient 20s ease infinite;
  overflow: hidden;

  p, h1, h2 {
    position: relative;
    z-index: 2;
  }

.topBackground {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
  path {
    stroke: ${darkHoverBlue};
    fill:${darkBlue};
    fill-opacity:0;
    stroke-width:0.4;
    stroke-dasharray: 700;
    stroke-opacity: 0.3;
    stroke-dashoffset:0;
    -moz-animation: strokeFill 30s linear infinite alternate-reverse;
    -webkit-animation: strokeFill 30s linear infinite alternate-reverse;
    animation: strokeFill 30s linear infinite alternate-reverse;
  }

  @keyframes strokeFill{
    0%  {stroke-dashoffset:1000;}
    100%{stroke-dashoffset:0;}
  }

  @-webkit-keyframes strokeFill{
      0%  {stroke-dashoffset:1000;}
      100%{stroke-dashoffset:0;}
  }
  @-moz-keyframes strokeFill{
      0%  {stroke-dashoffset:1000;}
      100%{stroke-dashoffset:0;}
  }

}
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 15px;
  letter-spacing: 0.1rem;
`;

const PageSubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  color: white;
  text-align: center;
  letter-spacing: 0.25rem;
  margin: 0;
`;

const PageDescription = styled.p`
  font-size: 0.5rem;
  font-weight: 100;
  color: white;
  text-align: center;
  margin: 10px auto 0;
  width: 200px;
  position: relative;
  line-height: 12px;

  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 0.5px;
    left: -50px;
    top: 5px;
    background-color: white;
    opacity: 0.3;
  }

  &:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 0.5px;
    right: -50px;
    top: 5px;
    background-color: white;
    opacity: 0.4;
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
            <PageTitleHeader>
              <PageTitle>Blog</PageTitle>
              <PageSubTitle>Welcome to my blog.</PageSubTitle>
              <PageDescription>Here are some of my dev thoughts and some cool things I've picked up on the way.</PageDescription>
              <Icon className="topBackground"/>
            </PageTitleHeader>
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