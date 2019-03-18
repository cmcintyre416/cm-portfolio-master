import React from "react"
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Header from '../components/header';
import Social from '../components/social';

import { MainWrapper } from '../styles/containers';
import { ContentWrapper } from '../styles/containers';
import { BlogPage } from '../styles/blog';
import styled from 'styled-components';
import {darkHoverBlue, darkBlue} from '../styles/colours';

const BlogTemplate = styled.div`

  .blogTemplateHeader {
    box-shadow: 0px 2px 4px rgba(154, 154, 154, 0.4);
    text-align: center;
    min-height: 80px;
  }

  .blog-post {
    h2 {  
      font-size: 2.8rem;
    }

    img {
      width: 100%;
    }

    .blog-post-content {
      width: 80%;
      margin: 60px auto;

      .blog-date {
        font-size: 0.8rem;
        margin: 10px 0;
      }
    }
  }
`;

const BackToBlog = styled.div`

  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    border: 1px solid ${darkBlue};
    border-radius: 4px;
    padding: 5px 20px;
    color: ${darkBlue};
    text-decoration: none;

    &:hover {
      background-color: ${darkHoverBlue};
      border: 1px solid transparent;
      color: white;
    }
  }

  .mainSocial {
    a {
      border: none;
      margin: 0 0 0 20px;
      padding: 5px;

      &:hover {
        background-color: transparent;
        color: ${darkHoverBlue};
      }

    }
  }

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
                  All posts
              </Link>
              <Social/>
            </BackToBlog>
                <div className="blog-post">
                  <div className="blog-post-content">
                    <p className="blog-date">{frontmatter.date}</p>
                    <h2>{frontmatter.title}</h2>
                  </div>
                  <img src={frontmatter.image} alt=''/>
                  <div
                    className="blog-post-content blog-paragraphs"
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