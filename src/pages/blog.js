import React from "react";
import { graphql } from 'gatsby';

import PostLink from "../components/blogPosts";
import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';
import PageTitles from '../components/pageTitles';

import { MainWrapper, ContentWrapper } from '../styles/containers';
import { BlogPage, BlogPosts } from '../styles/blog';

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
        <Header headerName="simpleHeader" linkTo="/"/>
        <Nav navType="fixedNav" navIsOpen={false}/>
        <MainWrapper>
          <ContentWrapper>
            <BackHome/>
              <PageTitles pageTitle='Blog' pageSub='Welcome to my blog' />
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
          excerpt(pruneLength: 80)
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