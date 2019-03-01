import { Link } from "gatsby";
import React from "react";

import styled from 'styled-components';
import { MainWrapper } from '../styles/containers';

import CMLogo from '../images/cmLine.svg';

const MainHeader = styled.div`
  background-color: white;
  box-shadow: 0px 2px 5px lightgrey;
  min-height: 100px;
  position: relative;
  z-index: 1000;
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
      stroke-dasharray: 2500;
      opacity: 1;
      animation: animate 2.5s cubic-bezier(0,0.23,1,.1) forwards;
    }

    @keyframes animate {
      0% {
        opacity: 0;
        fill: 0;
        stroke-dashoffset: 2500;
      }
      30% {
        opacity: 1;
        fill: none;
      }
      90% {
        fill: #5272ef;
        fill-opacity: 1;
        stroke-dashoffset: 0;
      }
      100% {
        opacity: 1;
        fill: #5272ef;
        fill-opacity: 1;
        stroke-dashoffset: 0;
      }
    }
  }
`;

const Header = () => (
  <MainHeader className="header">
    <MainWrapper>
      <h1>
        <Link to='/'>
        <CMLogo title="Colin Mcintyre" alt="Colin Mcintyre Logo" className="animationLogo"/>
        </Link>
      </h1>
    </MainWrapper>
  </MainHeader>
)


export default Header
