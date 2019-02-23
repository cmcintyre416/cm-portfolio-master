import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const PostContainer = styled.div`
    background-color: white;
    box-shadow: 0px 2px 3px grey;
    padding: 30px;
`;

const PostDate = styled.div`
`;

const PostLink = ({ post }) => (
  <PostContainer>
    <Link to={post.frontmatter.path}>
      <PostDate>
        {post.frontmatter.date}
      </PostDate>
      {post.frontmatter.title}
      {post.excerpt}
    </Link>
  </PostContainer>
)

export default PostLink;