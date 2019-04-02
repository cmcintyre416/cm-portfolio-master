import { Link } from "gatsby";
import React from "react";
import { useState, useEffect } from 'react';    

import Social from '../components/social';

import { navItems } from "../../static/data/navItems";

import { MainWrapper } from '../styles/containers';
import { darkBlue, mediumBlue } from '../styles/colours';
import { Aside, MainNav } from '../styles/mainnav';


const Nav = (props) => {
  const [navOpen, setNavOpen] = useState(props.navIsOpen);
  
  useEffect(()=>{
    const navContainer = document.querySelector('.navContainer');

    if(!navOpen){
      navContainer.classList.add('closed');
    }else{
      navContainer.classList.remove('closed');
    }
    
  });

  const toggleNav = e => {
    // e.preventDefault();
    setNavOpen(!navOpen);
    slideNav();
  }
  
  const slideNav = () => {
    const navContainer = document.querySelector('.navContainer');
    if(navOpen){
      navContainer.classList.add('closed');
    }else{
      navContainer.classList.remove('closed');
    }
  }

  


  return (
    <Aside className={`${props.navType} mainAside navContainer`}>
      <button onClick={toggleNav} className="minNavButton">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>
      </button>
      <MainWrapper className="mainNavWrapper">
        <MainNav className="mainNav">
          {navItems.map((item, i) => {
            return <Link 
              to={item.link}
              key={`key-${i}`}  
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

export default Nav;