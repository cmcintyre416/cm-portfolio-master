import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { PageContainer } from '../styles/containers';
import {BlueCta} from '../styles/buttons';
import {darkBlue} from '../styles/colours';
import styled from 'styled-components';
import Icon from '../images/topographyBlue.svg';


const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 350px;

  h2 {
    font-size: 2.4rem;
    color: ${darkBlue};
    margin-bottom: 15px;
  }

  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 50px;
  }

  .topographyBlue {
    width: 700px;
    height: 700px;
    position: absolute;
    z-index: -1;
    opacity: 0.6;
  }

  .topographyBlue-bottom {
    right: 0;
    bottom: 0;
  }

  .topographyBlue-top {
    left: 0;
    top: 0;
    transform: rotate(180deg);
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Web Developer`, `Front end`, `React`, `Gatsby`]} />
    <PageContainer>
      <HomePage>
        <h2>Colin McIntyre</h2>
        <h3>Web Developer</h3>
        <Link to={'/contact/'}>
          <BlueCta>Contact Me</BlueCta>
        </Link> 
        <Icon className="topographyBlue topographyBlue-bottom"/>
        <Icon className="topographyBlue topographyBlue-top"/>
      </HomePage>
    </PageContainer>
  </Layout>
)

export default IndexPage
