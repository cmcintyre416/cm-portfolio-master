import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

import Icon from '../images/topographyBlue.svg';

import { PageContainer } from '../styles/containers';
import { BlueCta } from '../styles/buttons';
import { HomePage } from '../styles/home';
import { MainWrapper } from '../styles/containers';


const IndexPage = () => (
    <>
      <SEO title="Home" keywords={[`Web Developer`, `Front end`, `React`, `Gatsby`]} />
      <PageContainer>
        <HomePage>
          <MainWrapper className="wrapper">
            <h2>Colin McIntyre</h2>
            <h3>Web Developer</h3>
            <Link to={'/contact/'}>
              <BlueCta>Contact Me</BlueCta>
            </Link> 
            <Icon className="topographyBlue topographyBlue-bottom"/>
            <Icon className="topographyBlue topographyBlue-top"/>
          </MainWrapper>
        </HomePage>
      </PageContainer>
    </>
)

export default IndexPage
