import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const PostContainer = styled.div`
    background-color: white;
    box-shadow: 0px 2px 3px grey;
    border-radius: 5px;

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