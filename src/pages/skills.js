import React from "react";
import { graphql } from 'gatsby';
import { useState, useEffect } from 'react';

import Nav from '../components/nav';
import BackHome from '../components/backHome';
import Header from '../components/header';
import PageTitles from '../components/pageTitles';
import SkillsPosts from '../components/skillsPosts';
import { skillTags } from "../../static/data/skillTags";

import { MainWrapper, ContentWrapper } from '../styles/containers';
import { SkillsFilters, SkillsContainer, GithubTracker } from "../styles/skills.js";

function gitScrapes() {
  const [scrapes, setScrapes] = useState({});

  async function fetchScrapes() {
    const res = await fetch(`https://stormy-reef-49194.herokuapp.com/githubData`);
    const data = await res.json();
    setScrapes(data);
  }

  useEffect(() => {
    fetchScrapes();
  }, []);
  return scrapes;
};

const Skills = ({data}) => {
  const [filterText, setFilter] = useState('');
  const [tagSelect, setTagSelect] = useState('');
  const [initialList, setInitialList] = useState([]);
  const githubData = gitScrapes();
  
  useEffect(() => { 
    // Initial List By Alphabet
    const listAlpha = data.allSkillsJson.edges.sort( (a, b) => {
      if(a.node.title < b.node.title) { return -1; }
      if(a.node.title > b.node.title) { return 1; }
      return 0;
    });
    setInitialList(listAlpha);
  });

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleSelectChange = event => {
    setTagSelect(event.target.value);
  };
  
  const filteredList = initialList.filter(item => {
    return item.node.title.toLowerCase().includes(filterText.toLowerCase()) && item.node.mainTag.toLowerCase().includes(tagSelect.toLowerCase());
  });

  const Skills = filteredList.map( (edge, i) => {
    return <SkillsPosts key={`key-${i}`} skill={edge.node}/>
  });

  return (
    <>
      <Header headerName="simpleHeader" linkTo="/"/>
      <Nav navType="fixedNav" navIsOpen={false}/>
      <MainWrapper>
        <ContentWrapper>
          <BackHome/>
          <PageTitles pageTitle='Skills'/>
          <SkillsFilters>
            <div className="selectorContainer">
              <label htmlFor="selectSkillTag">Skill Tag</label>
              <select name="selectSkillTag" value={tagSelect} onChange={handleSelectChange}>
                {skillTags.map((tag, i) => {
                 return <option key={`key-${tag.label}`} value={tag.value}>{tag.label}</option>;
                })}
              </select>
            </div>
            <form id="skillForm">
              <label htmlFor="searchSkill">Search</label>
              <input type="text" name="searchSkill" onChange={handleFilterChange} value={filterText}/>
            </form>
          </SkillsFilters>
          <SkillsContainer>
            {Skills} 
          </SkillsContainer>
          <GithubTracker>
            {/* <DisplayGithubData/> */}
          </GithubTracker>
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
          urlImage
        }
      }
    }
  }
`