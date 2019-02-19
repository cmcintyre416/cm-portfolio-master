import styled from "styled-components";
import { lightBlue } from '../styles/colours';

export const SiteWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
min-height: 1000px;
width: 100%;

.layoutBodyWrapper {
  flex-grow: 1;
}
`;

export const LayoutWrapper = styled.div`
display: flex;
flex-direction: row;
min-height: 100%;
position: relative;

.navContainer {
  width: 250px;
  transition: 1s ease;

  .mainNav {
    opacity: 1;
    max-height: 200px;
    transform: translateX(0);
    transition: 1.5s ease;
  }

  .mainSocial {
    opacity: 1;
    transform: translateX(0);
    transition: 1.5s ease;
  }
}

.closed {
  /* transform: translateX(-200px); */
  width: 50px;
  transition: 1s ease;

  .mainNav {
    opacity: 0;
    max-height: 200px;
    transform: translateX(-200px);
    transition: 0.8s ease;
  }

  .mainSocial {
    opacity: 0;
    transform: translateX(-200px);
    transition: 0.8s ease;
  }
}
`;

export const Content = styled.div`
background-color: ${lightBlue};
position: relative;
z-index: 5;
flex-grow: 1;
padding: 25px;
`;
