import React from "react";
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

const PostLink = ({post}) => (
  <PostContainer>
    <p>{post.name}</p>
  </PostContainer>
)

export default PostLink;