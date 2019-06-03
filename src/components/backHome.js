import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { darkBlue, mediumBlue } from '../styles/colours';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHome
  } from '@fortawesome/free-solid-svg-icons';

import { navItems } from "../../static/data/navItems";

const BackHomeContainer = styled.div`
   position: absolute;
   top: -45px;
   left: 0px;
   z-index: 2;
   display: flex;
   justify-content: space-between;
   width: 100%;

    a {
        font-size: 0.8rem;
        text-decoration: none;
        color: black;
        padding: 2.5px 0;
        height: 30px;

        &:hover {
            color: ${darkBlue};
            border-bottom: 1px solid ${darkBlue};
        }

        svg {
            margin-right: 5px;
        }
    }

    @media(max-width: 900px){
        padding: 0 50px;
    }

    @media(max-width: 500px){
        padding: 0 25px;
    }

`;

const QuickNav = styled.div`

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;

        a {
            margin-left: 30px;
        }
    }
`;


const BackHome = () => (
    <BackHomeContainer>
        <Link to={'/'}>
            <FontAwesomeIcon icon={faHome} />
            Home
        </Link>
        <QuickNav>
            <ul>
                {navItems.filter(item => item.text !== "Home").map((filteredItem, i) => {
                    return (
                        <Link 
                            to={filteredItem.link}
                            key={`key-${i}`}  
                            activeStyle={
                                { transition: `0.5s ease`,
                                borderBottom: `1px solid ${mediumBlue}`,
                                color: `${darkBlue}`}
                            }
                            >
                            {filteredItem.text}
                        </Link>
                    )
                })}
            </ul>
        </QuickNav>
    </BackHomeContainer>
)

export default BackHome;
