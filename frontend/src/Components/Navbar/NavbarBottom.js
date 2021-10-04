import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import { FiLogIn, FiLogOut, FiUser, FiHome } from "react-icons/fi"
import { LinkContainer } from "react-router-bootstrap"
import styled from '@emotion/styled';
import Badge from '@material-ui/core/Badge';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const NavBottom = styled.div`
    opacity: 0;
    display: flex;
    border-radius: 24px 24px 0px 0px;
    padding: 0px 40px;
    background-color: #F8D3E2;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;

    @media screen and (max-width: 884px){
        opacity: 1;
        padding: 0px 120px;
    }

    @media screen and (max-width: 414px){
        padding: 0px 45px;
    }

    @media screen and (max-width: 320px){
        padding: 0px 20px;
    }
`

const NavLinks = styled.div`
    color: #0d1137;
    font-size: 1.5rem;
    cursor: pointer;

`

const NavbarBottom = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
  
    const logoutHandler = () => {
      dispatch(logout())
    }


    return (
        <NavBottom>
           <LinkContainer to='/'>
              <NavLinks>
                <FiHome />
              </NavLinks>
           </LinkContainer>

           <LinkContainer to='/cart'>
              <NavLinks>
                <Badge badgeContent={cartItems.reduce((acc, item) => acc + item.qty, 0 )} color="primary">
                   <LocalMallOutlinedIcon />
                </Badge>
              </NavLinks> 
          </LinkContainer>

          {userInfo ?
            <LinkContainer to='/profile'style={{display: 'block'}}>
              <NavLinks>
                <FiUser />
              </NavLinks>
            </LinkContainer> :
            <LinkContainer to='/profile' style={{display: 'none'}}>
              <NavLinks>
                <FiUser />
              </NavLinks>
            </LinkContainer>
          }

          <div>
            {userInfo ?
              <div style={{color: '#111', fontSize: '1.35rem'}}>
                <FiLogOut onClick={logoutHandler} />
              </div> 
            : 
              <Link to='/login/accountcontext=register/auth/lang=en'>
                <NavLinks>
                    <FiLogIn/>
                </NavLinks> 
              </Link>

            }
          </div>
        </NavBottom>
    )
}

export default NavbarBottom
