import React from 'react'
import { MenuList, MenuContainer,MenuLinks, MenuItem, MainMenu, LoginContainer, NavLinks } from './MenuElements'
import { LinkContainer } from "react-router-bootstrap"
import { NavDropdown } from 'react-bootstrap'
import { FiLogIn, FiUser} from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Menu = () => {

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
      dispatch(logout())
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
                      <NavDropdown style={{marginLeft: '-10px',marginTop: '10px'}}>
                        <LinkContainer to='/profile'>
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                      </NavDropdown>
                      <NavLinks style={{margin: '10px -5px 0px', fontSize: '1.2rem'}}>
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
