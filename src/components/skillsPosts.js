import React from "react";
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons' 

library.add(faReact, faJs, faCss3);


const SkillContainer = styled.div`
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 5px;

    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

`;

const SkillsPosts = ({skill}) => (
  <SkillContainer>
    <div className="skillLogoWrapper">
      {skill.icon !== '' ? <FontAwesomeIcon icon={["fab", skill.icon ? skill.icon : "js"]} /> : 'Icon Not Found'}
      <p>{skill.title}</p>
    </div>
    <div className="skillViewWrapper">
      {skill.icon !== '' ? <FontAwesomeIcon icon={["fab", skill.icon ? skill.icon : "js"]} /> : 'Icon Not Found'}
      <p>{skill.title}</p>
      <p>{skill.subTitle}</p>
      <p>{skill.mainTag}</p>
      <p>{skill.description}</p>
    </div>
  </SkillContainer>
)

export default SkillsPosts;