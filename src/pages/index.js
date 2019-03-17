import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Nav from '../components/nav';
import Header from '../components/header';

import Icon from '../images/topographyBlue.svg';

import { BlueCta } from '../styles/buttons';
import { HomePage } from '../styles/home';

const IndexPage = () => (
    <>
      <SEO title="Home" keywords={[`Web Developer`, `Front end`, `React`, `Gatsby`]} />
      <Header linkTo="/"/>
      <HomePage>
        <div className="navContainer">
          <Nav/>
        </div>
        <div className="contentWrapper">
          <h2>Colin McIntyre</h2>
          <h3>Web Developer</h3>
          {/* <Link to={'/contact/'}>
            <BlueCta className="home-contact-button">Contact Me</BlueCta>
          </Link>  */}
          <Icon className="topographyBlue topographyBlue-bottom"/>
          <Icon className="topographyBlue topographyBlue-top"/>
        </div>
      </HomePage>
    </>
)

export default IndexPage
