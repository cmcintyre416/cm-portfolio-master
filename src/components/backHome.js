import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { darkBlue } from '../styles/colours';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHome
  } from '@fortawesome/free-solid-svg-icons';


const BackHomeContainer = styled.div`
   position: absolute;
   top: -45px;
   left: 0px;
   z-index: 2;

    a {
        font-size: 0.8rem;
        text-decoration: none;
        color: black;
        padding: 2.5px 0;

        &:hover {
            color: ${darkBlue};
            border-bottom: 1px solid ${darkBlue};
        }

        svg {
            margin-right: 5px;
        }
    }


`;

const BackHome = () => (
    <BackHomeContainer>
        <Link to={'/'}>
            <FontAwesomeIcon icon={faHome} />
            Home
        </Link>
    </BackHomeContainer>
)

export default BackHome;
