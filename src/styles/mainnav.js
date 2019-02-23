import styled from "styled-components";
import { darkBlue, darkHoverBlue } from '../styles/colours';

export const Aside = styled.div`
  padding: 100px 0 50px;
  height: 100%;
  position: relative;

  .mainNavWrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .minNavButton {
    font-size: 0.4rem;
    position: absolute;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
    height: 60px;
    width: 60px;
    z-index: 10000;
    background-color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .line {
      height: 2.5px;
      border-radius: 5px;
      background-color: ${darkBlue};
      margin: 3px 10px;
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