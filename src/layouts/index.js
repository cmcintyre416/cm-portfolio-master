import React from "react";
import PropTypes from "prop-types";
import Footer from '../components/footer';
import Transition from '../components/transition';

import "../styles/normalize.css";
import { SiteWrapper, LayoutWrapper } from '../styles/layout';

// import NProgress from 'nprogress';

// const turbolinks = document.querySelectorAll('.turbolinks');

// NProgress.start();

// turbolinks.addEventListener('click', function(){
//   NProgress.start();
// });

const Layout = ({ children, location }) => (
  <>
    <SiteWrapper>
      <LayoutWrapper className="reference">
        <Transition location={location}>
          {children}
        </Transition>
        <Footer/>
      </LayoutWrapper>
    </SiteWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
