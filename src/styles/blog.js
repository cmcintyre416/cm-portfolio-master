import styled from 'styled-components';

export const BlogPage = styled.div`
    background-color: #fafafa;
`;

export const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  justify-content: space-between;
  row-gap: 30px;

  @media(max-width: 1400px){
    grid-template-columns: 48% 48%;
  }

   @media(max-width: 800px){
        padding: 0 50px;
        grid-template-columns: 1fr;
    }
`;
