import React from "react"
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Header from '../components/header';

import { MainWrapper } from '../styles/containers';
import { ContentWrapper } from '../styles/containers';
import { BlogPage } from '../styles/blog';
import styled from 'styled-components';

const BlogTemplate = styled.div`
  .blogTemplateHeader {
    box-shadow: 0px 2px 4px rgba(154, 154, 154, 0.4);
    text-align: center;
    min-height: 80px;
  }
`;

const BackToBlog = styled.div`


`;


export default function Template({data}){
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <BlogPage>
      <BlogTemplate>
        <Header headerName="blogTemplateHeader" linkTo="/blog"/>
        <MainWrapper className="blogTemplateWrapper">
          <ContentWrapper>
            <BackToBlog>
              <Link to={'/blog'}>
                  Blog Home
              </Link>
            </BackToBlog>
                <div className="blog-post">
                  <h1>{frontmatter.title}</h1>
                  <h2>{frontmatter.date}</h2>
                  <img src={frontmatter.image} alt=''/>
                  <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
          </ContentWrapper>
        </MainWrapper>
      </BlogTemplate>
    </BlogPage>
  )
}

export const pageQuery = graphql` 
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
      image
    }
  }
}
`;