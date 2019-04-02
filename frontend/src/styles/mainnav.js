import styled from "styled-components";
import { darkBlue, darkHoverBlue } from '../styles/colours';

export const Aside = styled.div`
  padding: 100px 0;
  height: 100%;
  position: relative;
  background-color: white;

  .mainNavWrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow:hidden;
    padding: 0 40px 0 30px;
  }

  .minNavButton {
    font-size: 0.4rem;
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    height: 60px;
    width: 60px;
    z-index: 5;
    background-color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    &:before{
    position: absolute;
    content: "";
    width: 30px;
    height: 65px;
    left: 0px;
    background: white;
    }

    .line {
      height: 2px;
      border-radius: 5px;
      background-color: ${darkBlue};
      margin: 3px 10px;
      z-index: 6;
    }

    .line1 {
      width: 15px;
    }

    .line2 {
      width: 30px;
    }

    .line3 {
      width: 15px;
    }

    .line4 {
      width: 20px;
    }

    &:hover{
      box-shadow: 2px 0px 2px lightgrey;

      .line {
        background-color: ${darkHoverBlue};
      }
    }

    &:focus {
      outline: none;
      .line {
        background-color: ${darkHoverBlue};
      }
    }
  }

  &.fixedNav {
    position: fixed;
      top: 0;
      bottom: 0;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      z-index: 4;

      .mainNavWrapper {
        padding-top: 100px;
      }
      
      .minNavButton {
        box-shadow: 3px 0px 3px rgba(0,0,0,0.10), 3px 0px 3px rgba(0,0,0,0.20);
      }

      @media(max-width: 900px){
        display: none;
      }
  }
`;

export const MainNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 25px;
    color: ${darkBlue};
    font-size: 0.8rem;
    letter-spacing: 0.4px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${darkHoverBlue};
    }
  }
`;

