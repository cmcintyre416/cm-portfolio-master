import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import { darkBlue } from '../styles/colours';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3, faSass } from '@fortawesome/free-brands-svg-icons';

library.add(faReact, faJs, faCss3, faSass);


const SkillContainer = styled.div`

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

const SkillsPosts = ({skill}) => {
  const [open, setOpen] = useState(false);

  return (
    <SkillContainer onMouseLeave={()=> setOpen(false)}>
      <div className="skillLogoWrapper" onClick={() => setOpen(!open)}>
        {skill.icon !== '' ? <FontAwesomeIcon icon={["fab", skill.icon]} /> : 'Icon Not Found'}
        <p>{skill.title}</p>
      </div>
      <div className={`skillViewWrapper  ${open ? 'openView' : 'closeView'}`}>
        <div className="arrowUp"></div>
        <div className="arrowUpCover"></div>
        <div className="skillViewInnerWrapper">
          <div className="viewTitleLogoContainer">
            <p className="viewTitle">{skill.title}</p>
            <p className={`viewMainTag ${skill.mainTag}`}>{skill.mainTag}</p>
          </div>
          <p className="viewSubTitle">{skill.subTitle}</p>
          <p className="viewDescription">{skill.description}</p>
        </div>
      </div>
    </SkillContainer>
  );
}

export default SkillsPosts;