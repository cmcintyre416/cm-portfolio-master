import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const PostContainer = styled.div`
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 5px;

    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .imageContainer {
      overflow: hidden;
      border-radius: 5px;
      
      img {
        margin: 0;
      }
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: black;
      }
    }
`;

const PostDate = styled.div`
  font-size: 0.7rem;
  margin-bottom: 5px;
  color: slategrey;
`;

const PostTitle = styled.div`
  font-size: 1.3rem;
  line-height: 30px;
  margin-bottom: 20px;
  color: black;
  font-weight: 600;
`;

const PostExerpt = styled.div`
  font-size: 0.8rem;
  line-height: 18px;
`;

const PostLink = ({ post }) => (
  <PostContainer>
    <div className="imageContainer">
      <Link to={post.frontmatter.path}>
        <img src={post.frontmatter.image} alt=''/>
      </Link>
    </div>
    <div className="textContainer">
        <PostDate>{post.frontmatter.date}</PostDate>
        <Link to={post.frontmatter.path}>
          <PostTitle>{post.frontmatter.title}</PostTitle>
        </Link>
        <PostExerpt>{post.excerpt}</PostExerpt>
    </div>
  </PostContainer>
)

export default PostLink;