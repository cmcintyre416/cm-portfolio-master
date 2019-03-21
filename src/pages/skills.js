import React from "react";
import { graphql } from 'gatsby';

import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';
import PageTitles from '../components/pageTitles';
import SkillsPosts from '../components/skillsPosts';
import { darkHoverBlue } from '../styles/colours';

import { MainWrapper, ContentWrapper } from '../styles/containers';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
`;

const SkillsFilters = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  position: relative;

  .selectorContainer {
    label {
      margin-right: 20px;
    }
  }

  form {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    label {
      margin-right: 20px;
    }
  }
`;

const Skills = ({data}) => {
  const Skills = data.allSkillsJson.edges
    .map(edge => <SkillsPosts key={edge.node.id} skill={edge.node}/>)
  return (
    <>
      <Header headerName="simpleHeader" linkTo="/"/>
      <Nav navType="fixedNav"/>
      <MainWrapper>
        <ContentWrapper>
          <BackHome/>
          <PageTitles pageTitle='Skills'/>
          <SkillsFilters>
            <div className="selectorContainer">
              <label for="selectSkillTag">Skill Tag</label>
              <select name="selectSkillTag">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <form id="skillForm">
              <label for="searchSkill">Skill Tag</label>
              <input type="text" name="searchSkill"/>
            </form>
          </SkillsFilters>
          <SkillsContainer>
            {Skills} 
          </SkillsContainer>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
}

export default Skills;

export const pageQuery = graphql`
  query {
    allSkillsJson {
      edges {
        node {
          title
          subTitle
          description
          mainTag
          icon
        }
      }
    }
  }
`