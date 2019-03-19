import React from "react";
import { graphql } from 'gatsby';

import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';
import PageTitles from '../components/pageTitles';
// import SkillsPosts from '../components/skillsPosts';

import { MainWrapper, ContentWrapper } from '../styles/containers';
import styled from 'styled-components';

const SkillsPage = styled.div`

`;

const Skills = () => {
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
    allFile(filter: { sourceInstanceName: { eq: "skills" } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`