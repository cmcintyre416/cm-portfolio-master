import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from '../components/footer';
import Transition from '../components/transition';

import "../styles/normalize.css";
import styled from "styled-components";
import { lightBlue } from '../styles/colours';

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 1000px;
  width: 100%;

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

const Layout = ({ children, location }) => (
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
          <div className="layoutBodyWrapper">
            <LayoutWrapper>
                <div className="navContainer">
                  <Nav/>
                </div>
                <Content>
                  <Transition location={location}>
                    {children}
                  </Transition>
                </Content>
            </LayoutWrapper>
          </div>
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
