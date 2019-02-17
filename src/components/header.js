import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components';
import { MainWrapper } from '../styles/containers';
import {darkBlue} from '../styles/colours';

const MainHeader = styled.div`
  background-color: white;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  .period {
    color: ${darkBlue};
    font-size: 2rem;
  }
`;

const Header = ({ siteTitle }) => (
  <MainHeader>
    <MainWrapper>
      <h1>
        <Link>
          {siteTitle}
          <span className="period">.</span>
        </Link>
      </h1>
    </MainWrapper>
  </MainHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
