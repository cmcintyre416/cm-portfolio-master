import React from "react";
import { graphql } from 'gatsby';

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
  const Skills = edges
    .map(edge => <div key={edge.node.id} post={edge.node}></div>)

  return (
    <>
      <SkillsPage>
        <Header headerName="simpleHeader" linkTo="/"/>
        <Nav navType="fixedNav"/>
        <MainWrapper>
          <ContentWrapper>
            <BackHome/>
            <PageTitles pageTitle='Skills'/>
            {Skills}
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