import styled from 'styled-components';
import { darkBlue } from '../styles/colours';

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;

  @media(max-width: 900px){
      grid-template-columns:  1fr 1fr 1fr;
      padding: 0 50px;
  }

  @media(max-width: 650px){
      grid-template-columns:  1fr 1fr;
  }

  @media(max-width: 500px){
      grid-template-columns:  1fr;
  }
`;

export const SkillsFilters = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  position: relative;

  .selectorContainer {
    position: relative;
    
    label {
      margin-right: 20px;
    }
  }

  input, select{
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 5px 10px;
  }

  form {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    label {
      margin-right: 20px;
    }
  }

  @media(max-width: 800px){
      padding: 0 50px;
      flex-direction: column;
      align-items: flex-start;

      .selectorContainer, form{
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;

        label {
          margin: 10px 0;
          font-weight: bold;
        }
      }

      .selectorContainer {
        margin: 10px 0;
      }

      form {
        margin: 10px 0 50px;
      }
  }
`;

export const SkillContainer = styled.div`

    position: relative;

    &:hover .skillLogoWrapper{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      cursor: pointer;
    }

    .skillLogoWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      border-radius: 5px;

      svg {
        font-size: 2.5rem;
      }

      img {
        height: 45px;
        margin: 0;
        padding: 0;
        filter: gray;
        filter: grayscale(2);
      }

      p {
        padding: 0;
        margin: 0;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: 10px;
      }

    }

    .skillViewWrapper {
      position: absolute;
      left: -50px;
      right: -50px;
      top: 100%;
      padding-top: 20px;

        .skillViewInnerWrapper {
          background-color: white;
          padding: 20px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          border-radius: 5px;
          height: 250px;
          overflow: scroll;
          position: relative;
          z-index: 1;
          border-top: 4px solid ${darkBlue};

          p {
            margin: 0;
            font-size: 0.8rem;
          }

          svg {
            font-size: 2rem;
          }

          .viewTitleLogoContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid lightgrey;
          }

          .viewTitle {
            font-size: 1rem;
          }

          .viewSubTitle {
            font-size: 0.8rem;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .viewDescription {
            font-size: 0.6rem;
          }

          /* Tags */
          .viewMainTag {
            padding: 0 20px;
            border-radius: 5px;
            text-transform: uppercase;
            font-size: 0.6rem;
            box-shadow: 0px 2px 5px lightgrey;
          }

          .tag-js {
            background-color: gold;
          }

          .tag-tools {
            background-color: aqua;
          }

          .tag-css {
            background-color: coral;
          }

          .tag-systems {
            background-color: springgreen;
          }
        }

        .arrowUp {
          position: absolute;
          top: 10px;
          left: 50%;
          height: 25px;
          width: 25px;
          border-radius: 4px;
          transform: translateX(-50%) rotate(45deg);
          background-color: ${darkBlue};
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          z-index: 1;
        }

        .arrowUpCover {
          position: absolute;
          top: 20px;
          left: 50%;
          height: 4px;
          width: 40px;
          transform: translateX(-50%);
          background-color: ${darkBlue};
          z-index: 3;
        }
    }

    .closeView {
      display: none;
    }

`;

export const GithubTracker = styled.div`

`;