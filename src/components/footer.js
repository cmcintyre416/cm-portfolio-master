import React from "react";
import styled from 'styled-components';
import { MainWrapper } from '../styles/containers';
import { lightGrey } from '../styles/colours';

const MainFooter = styled.div`
  background-color: ${lightGrey};
`;

const Footer = ({ siteTitle }) => (
  <MainFooter>
    <MainWrapper>
      
    </MainWrapper>
  </MainFooter>
)

export default Footer;
