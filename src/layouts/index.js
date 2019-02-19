import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from '../components/footer';
import Transition from '../components/transition';

import "../styles/normalize.css";
import { SiteWrapper, LayoutWrapper, Content } from '../styles/layout';

// import NProgress from 'nprogress';

// const turbolinks = document.querySelectorAll('.turbolinks');

// NProgress.start();

// turbolinks.addEventListener('click', function(){
//   NProgress.start();
// });

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
