import React from 'react'
import { useSelector } from 'react-redux'
import { FiLogIn, FiHeart, FiShoppingBag, FiHome, FiUser } from "react-icons/fi"
import Badge from '@material-ui/core/Badge';
import { NavLink } from 'react-router-dom';
import '../../style/NavBottom.css'

const NavbarBottom = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const wishList = useSelector((state) => state.wishList)
    const { wishListItems } = wishList

    return (
      <div className="wrapper">
        <div className='tab-container'>
            <div className="tab purple">
              <NavLink exact to='/' activeClassName="active-link">
                <FiHome/>
              <p className="lng">Home</p>           
              </NavLink>
            </div>

            <div className="tab teal">
                <Badge badgeContent={cartItems.reduce((acc, item) => acc + item.qty, 0 )} color="primary" showZero>
                  <NavLink exact to='/cart' activeClassName="active-link">
                    <FiShoppingBag/>
                  <p className='lng'>Cart</p>
                  </NavLink>
                </Badge>
            </div> 

            <div className="tab red">
                <Badge badgeContent={wishListItems.length} color="secondary">
                  <NavLink exact to='/wishlist' activeClassName="active-link">
                    <FiHeart/>
                  <p className='lng'>Wish</p>
                  </NavLink>
                </Badge>
            </div>      
  

            <div className="tab orange">
            {userInfo ?
            <>
              <NavLink exact to='/profile' activeClassName="active-link">
                <FiUser/>
              <p className="lng">Profile</p> 
              </NavLink>
            </>
            :
            <>
              <NavLink exact to='/profile' activeClassName="active-link">
                <FiLogIn/>
              <p className="lng">Login</p>
              </NavLink>
            </>
            }
            </div>
        </div>
      </div>
    )
}

export default NavbarBottom
