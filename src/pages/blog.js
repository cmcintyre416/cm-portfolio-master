import React from "react";
import { graphql } from 'gatsby';

import PostLink from "../components/blogPosts";
import Nav from '../components/nav';
import BackHome from '../components/backHome';

import { MainWrapper } from '../styles/containers';
import {darkHoverBlue, darkBlue, mediumDarkBlue, mediumBlue, mediumLightBlue} from '../styles/colours';
import styled from 'styled-components';

const BlogPage = styled.div`

    background-color: #fafafa;

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
  margin: 50px auto;
  position: relative;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 110px;
  position: relative;

  &:after {
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(-45deg, ${darkHoverBlue} ,${darkBlue}, ${mediumDarkBlue}, ${mediumBlue}, ${mediumLightBlue});
    background-size: 400% 400%;
    -webkit-animation: Gradient 10s ease infinite;
    -moz-animation: Gradient 10s ease infinite;
    animation: Gradient 10s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
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
        <div className="navContainer blogNav">
          <Nav/>
        </div>
        <MainWrapper>
          <ContentWrapper>
            <BackHome/>
            <PageTitle>
              Blog
            </PageTitle>
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