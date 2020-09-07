import React, {useState} from 'react';
import styled from "styled-components";
import ToggleButton from './ToggleButton';
import SideDrawer from './SideDrawer'
import { NavLink, Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  z-index: 100;
  

  @media screen and (max-width: 768px) {
    & {
      background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(0,0,0,.9));
      background: -webkit-linear-gradient(to top, rgba(255,0,0,0), rgba(0,0,0,.9));
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 2rem;
    }
  }
`;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  color: var(--main-color);
  font-size: 2.5rem;
  span {
    display: inline-block;
    color: var(--second-color);
    font-size: 2rem;
  }
  a {
    color: var(--main-color);
    text-decoration: none;
  }
`;
const NavItems = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    padding: 0 3rem;
  }
  a {
    text-decoration: none;
    font-size: 2.5rem;
    color: var(--main-color);
    position: relative;
  }

  a::before {
    position: absolute;
    transform: translateX(-50%);
    bottom: 0rem;
    left: 50%;
    content: "";
    width: 105%;
    height: 0.2rem;
    background-color: var(--second-color);
    transition: all 0.4s ease;
  }
  a:hover::before {
    height: 100%;
    z-index: -1;
  }
  .active::before {
    height: 100%;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;




const Header = () => {

  const [sideDrawer, setSideDrawer] = useState(false);

  const toggleSideDrawerHandler = () => {
    setSideDrawer(prevState=>!prevState)
  }

  return (
    <StyledHeader>
    <Container>
      <HeaderWrapper>
        <Logo>
          <span>
            <i className="fas fa-less-than"></i>
          </span>
          <Link to={process.env.PUBLIC_URL + '/'}>Kasprowicz</Link>
          <span>
            <i className="fas fa-greater-than"></i>
          </span>
          </Logo>  
          <NavItems>
            <ToggleButton isOpen={sideDrawer} open={toggleSideDrawerHandler}/>
            <SideDrawer close={toggleSideDrawerHandler} isOpen={sideDrawer}/>
          <ul>
            <li>
              <NavLink to={process.env.PUBLIC_URL + '/about'}>About Me</NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + '/projects'}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + '/contact'}>Contact</NavLink>
            </li>
          </ul>
        </NavItems>
      </HeaderWrapper>
    </Container>
  </StyledHeader>
  );
};

export default Header;