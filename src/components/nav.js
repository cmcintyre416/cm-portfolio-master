import { Link } from "gatsby";
import React from "react";

import Social from '../components/social';

import { navItems } from "../../static/data/navItems";

import { MainWrapper } from '../styles/containers';
import { darkBlue, mediumBlue } from '../styles/colours';
import { Aside, MainNav } from '../styles/mainnav';


export default class Nav extends React.Component {
  state = {
    navOpen: true,
  };

  componentDidMount(){
    let currentPath = window.location.pathname;
    if(currentPath !== '/'){
      this.setState({
      navOpen: false
      });
      this.slideNav();
    }
  }

  toggleNav = e => {
    e.preventDefault();
    this.slideNav();
  }
  
  slideNav = () => {

    this.setState({
      navOpen: !this.state.navOpen
    });

    const navContainer = document.querySelector('.navContainer');

    if(this.state.navOpen){
      navContainer.classList.add('closed');
    }else{
      navContainer.classList.remove('closed');
    }

  }

  render(props){
    return (
      <Aside className={`${this.props.navType} mainAside navContainer`}>
        <button onClick={this.toggleNav} className="minNavButton">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
        </button>
        <MainWrapper className="mainNavWrapper">
          <MainNav className="mainNav">
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