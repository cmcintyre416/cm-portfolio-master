import styled from 'styled-components';

export const GitEventTracker = styled.div`
  position: relative;

  .gitEvents__scroll {
    position: absolute;
    top: calc(50% + 26px);
    transform: translateY(-50%);
    z-index: 2;
    padding: 20px;
    border-radius: 50px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: pointer;
  }

  .scroll--left {
    left: -50px;
  }

  .scroll--right {
    right: -50px;
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
    display: flex;
    flex-direction: row;
    transition: 1s ease all;
    width: 100%;
  }

  .gitEvents__event {
    padding: 10px 0;
    min-width: 100%;
    width: 100%;
    padding-right: 20px;
  }

  .gitEvents__commitContainer {
    overflow-y: scroll;
    flex-grow: 1;
  }

  @media (max-width: 900px){
    margin: 0px 50px;
  }

`;

export const GitEventTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 900px){
    padding: 0px 50px;
  }
`;