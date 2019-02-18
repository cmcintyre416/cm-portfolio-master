import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Social from '../components/social';

import { navItems } from "../../static/data/navItems";

import { MainWrapper } from '../styles/containers';
import { darkBlue, mediumBlue, darkHoverBlue } from '../styles/colours';
import { BlueCta } from "../styles/buttons";

const Aside = styled.div`
  padding: 100px 0 50px;
  height: 100%;

  .mainNavWrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .minNavButton {
    font-size: 0.4rem;
    position: absolute;
    right: 0;
  }
`;

const MainNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 25px;
    color: ${darkBlue};
    font-size: 0.8rem;
    letter-spacing: 0.4px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${darkHoverBlue};
    }
  }
`;


export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      
    });
  }

  render(){
    return (
      <Aside>
        <BlueCta className="minNavButton"/>
        <MainWrapper className="mainNavWrapper">
          <MainNav>
            {navItems.map(item => {
              return <Link 
                to={item.link}
                key={item.id}  
                activeStyle={
                  {
                    transition: `0.5s ease`,
                    borderBottom: `1px solid ${mediumBlue}`,
                    transform: `scale(1.1)`,
                    marginLeft: `10px`,
                    color: `${darkBlue}`
                  }
                }
                >
                {item.text}
              </Link>
            })}
          </MainNav>
          <Social/>
        </MainWrapper>
      </Aside>
    )
  }
}