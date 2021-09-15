import React from 'react'
import { NavLogo, NavbarContainer, Header, NavIcon, SearchContainer, SearchInput, IconButton, NavLinks } from './NavbarElements'
import { FiHeart } from "react-icons/fi"
import { BiSearchAlt } from "react-icons/bi"
import { IoLanguage } from "react-icons/io5"
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Badge from '@material-ui/core/Badge';
import { LinkContainer } from "react-router-bootstrap"


const Navbar = () => {

    return (
      <>
        <Header>
            <NavbarContainer>
              <LinkContainer to='/'>
                <NavLogo> Fashions.</NavLogo>
              </LinkContainer>
                <NavIcon>

                  <LinkContainer to='/'>
                    <NavLinks>
                      <IoLanguage />
                    </NavLinks>
                  </LinkContainer>

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