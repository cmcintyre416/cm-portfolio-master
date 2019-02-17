import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "../components/nav";

import Header from "./header";
import "./normalize.css";
import styled from "styled-components";
import { MainWrapper } from "../styles/containers";
import {lightBlue} from '../styles/colours';
import Footer from '../components/footer';

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 1000px;

  .layoutBodyWrapper {
    flex-grow: 1;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;

  .navContainer {
    width: 250px;
  }
`;

const Content = styled.div`
  background-color: ${lightBlue};
  position: relative;
  z-index: 10;
  flex-grow: 1;
  padding: 25px;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SiteWrapper>
          <Header siteTitle={data.site.siteMetadata.title}/>
          <MainWrapper className="layoutBodyWrapper">
          <LayoutWrapper>
              <div className="navContainer">
                <Nav/>
              </div>
              <Content>
                {children}
              </Content>
          </LayoutWrapper>
          </MainWrapper>
          <Footer/>
        </SiteWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
