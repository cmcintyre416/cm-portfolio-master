import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { darkBlue, darkHoverBlue } from '../styles/colours';

const BackHomeContainer = styled.div`
   position: absolute;
   top: 10px;
   right: 0px;
   z-index: 1000;

   a {
       font-size: 0.8rem;
        text-decoration: none;
        color: white;
        background-color: ${darkBlue};
        padding: 10px 25px;
        border-radius: 5px;

        &:hover {
            background-color: ${darkHoverBlue};
        }
   }
`;

const BackHome = () => (
    <BackHomeContainer>
        <Link to={'/'}>
            Back Home
        </Link>
    </BackHomeContainer>
)

export default BackHome;
