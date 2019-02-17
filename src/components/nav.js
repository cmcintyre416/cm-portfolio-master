import { Link } from "gatsby";
import React from "react";
import { navItems } from "../../static/data/navItems";
import styled from "styled-components";
import {darkBlue, mediumBlue} from '../styles/colours';

export const Aside = styled.div`
  padding-top: 100px;
`;

export const MainNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 25px;
    color: ${darkBlue};
    font-size: 0.8rem;
    letter-spacing: 0.4px;
    text-decoration: none;
    font-weight: bold;
    max-width: 200px;

    &:hover {
      color: ${mediumBlue};
    }
  }
`;

export const Social = styled.nav`
  
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
        <MainNav>
          {navItems.map(item => {
            return <Link 
              to={item.link}
              key={item.id}  
              activeStyle={
                {
                  transition: `0.5s ease`,
                  borderBottom: `1.5px solid ${mediumBlue}`,
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
      </Aside>
    )
  }
}