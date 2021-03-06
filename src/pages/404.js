import React from "react";
import SEO from "../components/seo";
import Header from '../components/header';
import { MainWrapper, ContentWrapper } from '../styles/containers';
import BackHome from '../components/backHome';

import styled from 'styled-components';

const NotFound = styled.div`
  margin-top: 100px;
  padding-top: 50px;
`;

const NotFoundPage = () => (
  <>
  <SEO title="404: Not found" />
    <Header linkTo="/blog"/>
    <MainWrapper>
      <ContentWrapper>
        <NotFound>
        <BackHome/>
            <h2>PAGE NOT FOUND</h2>
            <p>You just hit a route that doesn't exist.</p>
        </NotFound>
      </ContentWrapper>
    </MainWrapper>
  </>
)

export default NotFoundPage
