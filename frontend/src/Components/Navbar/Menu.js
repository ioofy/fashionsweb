import React from 'react'
import { MenuList, MenuContainer,MenuLinks, MenuItem, MainMenu, LoginContainer, NavLinks } from './MenuElements'
import { LinkContainer } from "react-router-bootstrap"
import { NavDropdown } from 'react-bootstrap'
import { FiLogIn, FiUser, FiUsers, FiBox} from "react-icons/fi"
import { CgLogOut, CgProfile } from "react-icons/cg"
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import {RiFileList3Fill} from 'react-icons/ri'

const Button = styled.button`
  font-size: 20px;
  width: 6rem;
  font-weight: bold;
  height: 2.4rem;
  border-radius: 5px;
  border: none;
  background: linear-gradient(90deg, rgba(255,118,117,1) 20%, rgba(255,163,117,1) 100%, rgba(0,212,255,1) 100%);
  color: #fff;
`

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
                  <NavDropdown style={{marginLeft: '-15px',marginTop: '10px'}} id='username'>
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
                  <LinkContainer to='/login/accountcontext=register/auth/lang=en'>
                    <NavLinks>
                      <Button>
                        Login
                        <FiLogIn style={{marginLeft: '5px'}} size={25} />
                      </Button>
                    </NavLinks>
                  </LinkContainer> }

                  {userInfo && userInfo.isAdmin && (
                    <>
                      <NavDropdown style={{marginLeft: '1px',marginTop: '10px'}} id='adminmenu'>
                      <LinkContainer to='/admin/userlist'>
                        <NavDropdown.Item><FiUsers style={{marginTop: '-1px', marginRight: '10px'}}/>Users</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/productlist'>
                        <NavDropdown.Item><RiFileList3Fill style={{marginTop: '-1px', marginRight: '10px'}}/>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/admin/orderlist'>
                        <NavDropdown.Item><FiBox style={{marginTop: '-1px', marginRight: '10px'}}/>Orders</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                    <NavLinks style={{margin: '10px -11px 0px', fontSize: '1.2rem'}}>
                      Dashboard
                    </NavLinks>
                    </>
                  )}
            </MainMenu>
            </LoginContainer>
        </MenuList>
    )
}

export default Menu
