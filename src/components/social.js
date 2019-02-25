import React from "react";
import styled from 'styled-components';
import { darkBlue, darkHoverBlue } from '../styles/colours';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faTwitter,
    faLinkedinIn
  } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = styled.div`
    
    /* max-height: 30px; */
    overflow: hidden;

    a {
        margin-right: 25px;
        color: ${darkBlue};
        
        &:hover {
            color: ${darkHoverBlue}
        }
    }
`;

const Social = () => (
  <SocialMedia className="mainSocial">
    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/colin_mcintyre_">
        <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/colin-a-mcintyre/">
        <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a rel="noopener noreferrer" target="_blank" href="https://github.com/cmcintyre416">
        <FontAwesomeIcon icon={faGithubAlt} />
    </a>
  </SocialMedia>
)

export default Social;

