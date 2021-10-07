import React, { useState, useEffect } from 'react'
import Badge from '@material-ui/core/Badge';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { NavLogo, NavbarContainer, Header, NavIcon,  NavLinks } from './NavbarElements'
import { FiHeart } from "react-icons/fi"
import { IoLanguage } from "react-icons/io5"
import SearchBox from './SearchBox';
import { Route } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap"
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [state, setState] = useState({});
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const wishList = useSelector((state) => state.wishList)
  const { wishListItems } = wishList

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
                      <Badge badgeContent={wishListItems.length} color="secondary">
                        <FiHeart />
                      </Badge>
                    </NavLinks>
                  </LinkContainer>

                  <LinkContainer to='/cart'>
                    <NavLinks>
                      <Badge badgeContent={cartItems.reduce((acc, item) => acc + item.qty, 0 )} color="primary" showZero>
                        <LocalMallOutlinedIcon />
                      </Badge>
                    </NavLinks> 
                  </LinkContainer>
              </NavIcon>
            <Route render={({ history }) => <SearchBox history={ history }/>}/>
            </NavbarContainer>
        </Header>
      </>
    )
}

export default Navbar