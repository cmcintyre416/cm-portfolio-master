import styled from 'styled-components';

export const BlogPage = styled.div`

    background-color: #fafafa;

    .blogHomeHeader {
      min-height: auto;
      text-align: center;
      box-shadow: none;
      background-color: transparent;
      padding-top: 20px;

      .animationLogo {
        width: 50px;
      }
    }

    .blogNav {
      position: fixed;
      top: 0;
      bottom: 0;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      z-index: 4;

      .mainNavWrapper {
        padding-top: 100px;
      }
      
      .minNavButton {
        box-shadow: 3px 0px 3px rgba(0,0,0,0.10), 3px 0px 3px rgba(0,0,0,0.20);
      }

      @media(max-width: 900px){
        display: none;
      }
    }
`;

export const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  justify-content: space-between;
  row-gap: 30px;

  @media(max-width: 1400px){
    grid-template-columns: 48% 48%;
  }
`;
