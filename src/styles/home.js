import { darkBlue } from '../styles/colours';
import styled from 'styled-components';

export const HomePage = styled.div`
  .wrapper{
    padding-top: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  h2 {
    font-size: 2.4rem;
    color: ${darkBlue};
    margin-bottom: 15px;
  }

  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 50px;
  }

  .topographyBlue {
    width: 700px;
    height: 700px;
    position: absolute;
    opacity: 0.6;

    @media(max-width: 1400px){
      width: 500px;
      height: 500px;
    }

    @media(max-width: 1000px){
      opacity: 0.2;
    }
  }

  .topographyBlue-bottom {
    right: 0;
    bottom: 0;
  }

  .topographyBlue-top {
    left: 0;
    top: 0;
    transform: rotate(180deg);
  }
`;
