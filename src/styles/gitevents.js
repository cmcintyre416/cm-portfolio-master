import styled from 'styled-components';
import { darkBlue } from '../styles/colours';

export const GitEventTracker = styled.div`
  position: relative;

  .gitEvents__scroll {
    position: absolute;
    top: calc(50% + 26px);
    transform: translateY(-50%);
    z-index: 2;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    align-items: center;

    .gitEvents__scrollBarCover {
      position: absolute;
      height: 80px;
      background-color: white;
      z-index: 1;
    }

    svg {
      z-index: 2;
    }

    &:focus  {
      outline: none;
    }

    &:hover svg{
      color: ${darkBlue};
    }

    @media (max-width: 500px){
      display: none;
    }
  }

  .scroll--left {
    left: -35px;
    justify-content: flex-start;
    padding-left: 15px;

    .gitEvents__scrollBarCover {
      transform: translateX(50%);
      left: 10px;
      right: 0px;
    }

    @media (max-width: 900px){
      left: 15px;
    } 
  }

  .scroll--right {
    right: -35px;
    justify-content: flex-end;
    padding-right: 15px;

    .gitEvents__scrollBarCover {
      left: 0px;
      right: 10px;
      transform: translateX(-50%);
    }

    @media (max-width: 900px){
      right: 15px;
    } 
  }

  .gitEvents__progressTracker {
    display: flex;
    justify-content: center;
    padding: 20px;

    button {
      margin: 0 10px;
      border: 1px solid ${darkBlue};
      border-radius: 50%;
      padding: 0;
      height: 15px;
      width: 15px;

      &:hover {
        background-color: ${darkBlue};
        cursor: pointer;
      }
    }

    .selected {
      background-color: ${darkBlue};
    }
  }

`;

export const GitEventsContainer = styled.div`
  background-color: white;
  padding: 15px 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  max-height: 400px;
  position: relative;

  .gitEventsOverflow {
    position: relative;
    display: flex;
    flex-direction: row;
    transition: 1s ease all;
    width: 100%;
    z-index: 3;
  }

  .gitEvents__event {
    padding: 10px 25px;
    min-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 20px;
    }

    .gitEvents__commitTitle {
      margin-bottom: 5px;
    }

    .gitEvents__catTitle {
      font-weight: 600;
      margin-right: 15px;
    }

  }

  .gitEvents__commitContainer {
    overflow-y: scroll;
    flex-grow: 1;
    border: 1px solid ${darkBlue};
    border-radius: 5px;
    padding: 20px;

    span {
      margin-right: 10px;
    }
  }

  &.loading-events {
    visibility: hidden;
    transition: 1s ease-in;
  }

  @media (max-width: 900px){
    margin: 0px 50px;
  }

  @media (max-width: 500px){
    margin: 0px 25px;
  }

`;

export const GitEventTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 900px){
    padding: 0px 50px;
    text-align: center;
  }
`;