import React, { useState, useEffect } from 'react'
import Badge from '@material-ui/core/Badge';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { NavLogo, NavbarContainer, Header, NavIcon, SearchContainer, SearchInput, IconButton, NavLinks } from './NavbarElements'
import { FiHeart } from "react-icons/fi"
import { BiSearchAlt } from "react-icons/bi"
import { IoLanguage } from "react-icons/io5"
import { LinkContainer } from "react-router-bootstrap"


const Navbar = () => {

  const [scroll, setScroll] = useState(false);
  const [state, setState] = useState({});

  const changeNav = () => {
      if(window.scrollY >= 70){
            setScroll(true);
      }
      else{
            setScroll(false);
      }
  }

  useEffect(() => {
    changeNav();
    return () => {
      setState({}); // This worked for me
    };
}, [state]);

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, [])

    return (
      <>
        <Header active={scroll}>
            <NavbarContainer>
              <LinkContainer to='/'>
                <NavLogo active={scroll}> Fashions.</NavLogo>
              </LinkContainer>
              <NavIcon>
                  <NavLinks>
                      <IoLanguage />
                    </NavLinks>
              
                  <LinkContainer to='/wishlist'>
                    <NavLinks>
                      <FiHeart />
                    </NavLinks>
                  </LinkContainer>

                  <LinkContainer to='/cart'>
                    <NavLinks>
                      <Badge badgeContent={0} color="primary">
                        <LocalMallOutlinedIcon />
                      </Badge>
                    </NavLinks> 
                  </LinkContainer>

              </NavIcon>
                  <SearchContainer>
                    <IconButton>
                        <BiSearchAlt size={22}/>
                    </IconButton>
                    <SearchInput placeholder="Search favourite products." />
                </SearchContainer>
            </NavbarContainer>
        </Header>
      </>
    )
}

export default Navbar