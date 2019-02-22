import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const PostContainer = styled.div`
    background-color: white;
    box-shadow: 0px 2px 3px grey;
    width: 30%;

    a {
      width: 100%;
    }

    img {
      width: 100%;
      margin-bottom: 0;
    }
`;

const PostTextWrapper = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const PostDate = styled.div`
`;

const PostTitle = styled.div`
`;

const PostDescription = styled.div`
`;

const PostLink = ({ post }) => (
  <PostContainer>
    <Link to={post.frontmatter.path}>
      <img src={post.frontmatter.image}/>
      <PostTextWrapper>
        <PostDate>
          {post.frontmatter.date}
        </PostDate>
        <PostTitle>
          {post.frontmatter.title}
        </PostTitle>
        <PostDescription>
          {post.excerpt}
        </PostDescription>
      </PostTextWrapper>
    </Link>
  </PostContainer>
)

export default PostLink;