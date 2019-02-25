import React from "react";
import PropTypes from "prop-types";
import Footer from '../components/footer';
import Transition from '../components/transition';

import "../styles/normalize.css";
import { SiteWrapper, LayoutWrapper } from '../styles/layout';

const Layout = ({ children, location }) => (
  <>
    <SiteWrapper>
      <LayoutWrapper className="reference">
        <Transition location={location}>
          {children}
        </Transition>
      </LayoutWrapper>
        <Footer/>
    </SiteWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
