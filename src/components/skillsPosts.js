import React from "react";
import { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3, faSass, faLess, faNpm, faNodeJs, faGulp, faGithub, faJquery } from '@fortawesome/free-brands-svg-icons';
import { SkillContainer } from "../styles/skills.js";

library.add(faReact, faJs, faCss3, faSass, faLess, faNpm, faNodeJs, faGulp, faGithub, faJquery);

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