import React from "react";
import { useState, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3, faSass, faLess, faNpm, faGulp, faGithub, faJira, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { SkillContainer } from "../styles/skills.js";

library.add(faReact, faJs, faCss3, faSass, faLess, faNpm, faGulp, faGithub, faJira, faNodeJs);

const SkillsPosts = ({skill}) => {
  const [open, setOpen] = useState(false);
  
  const determineIcon = () => {
    if(skill.icon === ''){
      return (
        <div>
          Icon not found.
        </div>
      )
    }else{
      return (
        <FontAwesomeIcon icon={["fab", skill.icon]} />
      )
    }
  } 

  return (
    <SkillContainer onMouseLeave={()=> setOpen(false)}>
      <div className="skillLogoWrapper" onClick={() => setOpen(!open)}>
        {determineIcon()}
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