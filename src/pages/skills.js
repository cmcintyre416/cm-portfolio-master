import React from "react";
import { graphql } from 'gatsby';
import { useState } from 'react';

import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';
import PageTitles from '../components/pageTitles';
import SkillsPosts from '../components/skillsPosts';
import { skillTags } from "../../static/data/skillTags";

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
  const [filterText, setFilter] = useState('');
  const [initialList, setInitialList] = useState(data.allSkillsJson.edges);
  
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };
  
  const filteredList = initialList.filter(item => {
    return item.node.title.toLowerCase().includes(filterText.toLowerCase());
  });

  const Skills = filteredList
  .map(edge => <SkillsPosts key={edge.node.id} skill={edge.node}/>);
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
              <label htmlFor="selectSkillTag">Skill Tag</label>
              <select name="selectSkillTag">
                {skillTags.map(tag => <option value={tag.value}>{tag.label}</option>)}
              </select>
            </div>
            <form id="skillForm">
              <label htmlFor="searchSkill">Skill Tag</label>
              <input type="text" name="searchSkill" onChange={handleFilterChange} value={filterText}/>
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