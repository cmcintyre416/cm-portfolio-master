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

const ProjectPage = styled.div`

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

const Project = () => {
  return (
    <>
      <ProjectPage>
        <Header/>
        <div className="navContainer blogNav">
          <Nav/>
        </div>
        <MainWrapper>
          <ContentWrapper>
            <BackHome/>
              <PageTitles pageTitle='Projects' pageDescription='Here are some of my favourite projects.'/>
          </ContentWrapper>
        </MainWrapper>
      </ProjectPage>
    </>
  );
}

export default Project;