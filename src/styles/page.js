import styled from 'styled-components';
import {darkHoverBlue, darkBlue} from '../styles/colours';

export const PageTitleHeader = styled.div`
  margin-bottom: 110px;
  position: relative;
  background-color: ${darkHoverBlue};
  padding: 50px 0;
  border-radius: 5px;
  background: linear-gradient(-45deg, ${darkHoverBlue}, ${darkBlue});
  background-size: 650% 650%;
  -webkit-animation: Gradient 20s ease infinite;
  -moz-animation: Gradient 20s ease infinite;
  animation: Gradient 20s ease infinite;
  overflow: hidden;

  p, h1, h2, a {
    position: relative;
    z-index: 4;
  }

.topBackground {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  
  path {
    stroke: ${darkHoverBlue};
    fill:${darkBlue};
    fill-opacity:0;
    stroke-width:0.4;
    stroke-dasharray: 1000;
    stroke-opacity: 0.25;
    stroke-dashoffset:0;
    -moz-animation: strokeFill 30s linear infinite alternate-reverse;
    -webkit-animation: strokeFill 30s linear infinite alternate-reverse;
    animation: strokeFill 30s linear infinite alternate-reverse;
  }

  @keyframes strokeFill{
    0%  {stroke-dashoffset:1000;}
    100%{stroke-dashoffset:0;}
  }

  @-webkit-keyframes strokeFill{
      0%  {stroke-dashoffset:1000;}
      100%{stroke-dashoffset:0;}
  }
  @-moz-keyframes strokeFill{
      0%  {stroke-dashoffset:1000;}
      100%{stroke-dashoffset:0;}
  }

}
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 15px;
  letter-spacing: 0.1rem;
`;

export const PageSubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  color: white;
  text-align: center;
  letter-spacing: 0.25rem;
  margin: 0;
`;

export const PageDescription = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
  color: white;
  text-align: center;
  margin: 10px auto 0;
  width: 250px;
  position: relative;
  line-height: 20px;

  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 0.8px;
    left: -50px;
    top: 15px;
    background-color: white;
    opacity: 0.5;
  }

  &:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 0.8px;
    right: -50px;
    top: 15px;
    background-color: white;
    opacity: 0.5;
  }
`;