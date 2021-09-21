import React from 'react'
import { MenuList, MenuContainer,MenuLinks, MenuItem, MainMenu, LoginContainer, NavLinks } from './MenuElements'
import { LinkContainer } from "react-router-bootstrap"
import { NavDropdown } from 'react-bootstrap'
import { FiLogIn, FiUser} from "react-icons/fi"
import { CgLogOut, CgProfile } from "react-icons/cg"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Menu = () => {

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
      dispatch(logout());
      window.location.reload()
    }

    return (
        <MenuList>
            <MenuContainer>
                <MainMenu>
                    <MenuItem>
                        <MenuLinks to='/about'>About Us</MenuLinks> 
                    </MenuItem>
                    <MenuItem>
                        <MenuLinks to='/blog'>Our Blog</MenuLinks> 
                    </MenuItem>
                    <MenuItem>
                        <MenuLinks to='/products'>Our Products</MenuLinks> 
                    </MenuItem>
                    <MenuItem>
                        <MenuLinks to='/contact'>Contact Us</MenuLinks> 
                    </MenuItem>
                </MainMenu>
            </MenuContainer>
            <LoginContainer>
            <MainMenu>
            {userInfo ? (
              <>
                <FiUser size={25} style={{marginTop: '1px'}} />
                  <NavDropdown style={{marginLeft: '-15px',marginTop: '10px'}}>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item><CgProfile style={{marginTop: '-1px', marginRight: '10px'}}/>Profile</NavDropdown.Item>
                    </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}><CgLogOut style={{marginTop: '-1px',marginRight: '10px'}} />Logout</NavDropdown.Item>
                  </NavDropdown>
                  <NavLinks style={{margin: '10px -10px 0px', fontSize: '1.2rem'}}>
                        Hello, {userInfo.name}
                  </NavLinks>
              </>
                  ) :
                  <LinkContainer to='/login'>
                    <NavLinks>
                        Sign-in
                      <FiLogIn style={{marginLeft: '5px'}} size={25} />
                    </NavLinks>
                  </LinkContainer> }
            </MainMenu>
            </LoginContainer>
        </MenuList>
    )
}

export default Menu
