import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const PostContainer = styled.div`
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 2px;

    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .imageContainer {
      height: 200px;
      overflow: hidden;
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      padding: 30px;
    }
`;

const PostDate = styled.div`
`;

const PostLink = ({ post }) => (
  <PostContainer>
    <div className="imageContainer">
      <Link to={post.frontmatter.path}>
        <img src={post.frontmatter.image} alt=''/>
      </Link>
    </div>
    <div className="textContainer">
        <PostDate>
          {post.frontmatter.date}
        </PostDate>
        <Link to={post.frontmatter.path}>
          {post.frontmatter.title}
        </Link>
        {post.excerpt}
    </div>
  </PostContainer>
)

export default PostLink;