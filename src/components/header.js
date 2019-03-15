import { Link } from "gatsby";
import React from "react";

import styled from 'styled-components';
import { MainWrapper } from '../styles/containers';
import { darkBlue } from '../styles/colours';

import CMLogo from '../images/cm-logo-modern.svg';

const MainHeader = styled.div`
  background-color: white;
  box-shadow: 0px 2px 5px lightgrey;
  min-height: 100px;
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    padding: 0;
  }
  
  .animationLogo {
    width: 70px;

    path {
      stroke: #5272ef;
      /* fill: none; */
      stroke-dasharray: 6000;
      opacity: 1;
      animation: animate 2.5s cubic-bezier(0,0.23,1,.1) forwards;
    }

    .st1-logo-blue {
      animation: animatePeriod 2.5s cubic-bezier(0,0.23,1,.1) forwards;
      stroke-dasharray: 1000;
      opacity: 1;
    }

    @keyframes animate {
      0% {
        opacity: 0;
        fill: 0;
        stroke-dashoffset: 6000;
      }
      30% {
        opacity: 1;
        fill: none;
      }
      90% {
        fill: black;
        fill-opacity: 1;
        stroke-dashoffset: 0;
      }
      100% {
        opacity: 1;
        fill: black;
        fill-opacity: 1;
        stroke-dashoffset: 0;
      }
    }

    @keyframes animatePeriod {
      0% {
        opacity: 0;
        fill: 0;
        stroke-dashoffset: 1000;
      }
      30% {
        opacity: 1;
        fill: none;
      }
      90% {
        fill: ${darkBlue};
        fill-opacity: 1;
        stroke-dashoffset: 0;
      }
      100% {
        opacity: 1;
        fill: ${darkBlue};
        fill-opacity: 1;
        stroke-dashoffset: 0;
      }
    }

    &:hover {
      animation: animatePeriod 2.5s cubic-bezier(0,0.23,1,.1) forwards;
    }
  }
`;

const Header = (props) => (
  <MainHeader className={props.headerName}>
    <MainWrapper>
      <h1>
        <Link to={props.linkTo}>
        <CMLogo title="Colin Mcintyre" alt="Colin Mcintyre Logo" className="animationLogo"/>
        </Link>
      </h1>
    </MainWrapper>
  </MainHeader>
)


export default Header
