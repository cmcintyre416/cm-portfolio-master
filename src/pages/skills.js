import React from "react";
import { graphql } from 'gatsby';

import PostLink from "../components/blogPosts";
import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';
import PageTitles from '../components/pageTitles';

import { MainWrapper, ContentWrapper } from '../styles/containers';
import styled from 'styled-components';

const SkillsPage = styled.div`

`;

const Skills = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <>
      <SkillsPage>
        <Header headerName="simpleHeader" linkTo="/"/>
        <Nav navType="fixedNav"/>
        <MainWrapper>
          <ContentWrapper>
            <BackHome/>
              <PageTitles pageTitle='Skills'/>
          </ContentWrapper>
        </MainWrapper>
      </SkillsPage>
    </>
  );
}

export default Skills;

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