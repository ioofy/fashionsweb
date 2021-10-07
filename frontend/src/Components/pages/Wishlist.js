import React, { useEffect } from 'react'
import Announcement from '../Stuff/Announcement'
import Navbar from '../Navbar/Navbar'
import styled from '@emotion/styled'
import {BiSearchAlt} from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Rating from '../Stuff/Rating'
import { addToWishList, removeWishList } from '../../actions/wishListActions'
import '../../style/WishList.css'
import { IoMdHeart } from 'react-icons/io'
import NavbarBottom from '../Navbar/NavbarBottom'
import Meta from '../Stuff/Meta'

const Details = styled.button`
  padding: 8px;
  width: 9.5rem;
  height: 2.5rem;
  font-size: 15px;
  margin-top: 5px;
  font-weight: bold;
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background: orange;
  box-shadow: 5px 5px #5E454B;
`


const Icon = styled.div`

    text-decoration: none;
    color: #FF3D68;
    height: 45px;
    width: 45px;
    text-align: center;
    margin-right: 10px;
    margin-top: -2px;
    position: absolute;
    font-size: 1.9rem;
    cursor: pointer;

    @media screen and (max-width: 884px){
      width: 42px;
      height: 42px;
    }
    @media screen and (max-width: 280px){
      font-size: 1.8rem;
      height: 40px;
      width: 40px;
      margin-left: -18px;
    }
`

const Wishlist = ({ match }) => {
    const productId = match.params.id
    const wishList = useSelector((state) => state.wishList)
    const { wishListItems } = wishList
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId){
            dispatch(addToWishList(productId))
        }
    }, [dispatch, productId])

    const removeWishListHandler = (id) =>{
        dispatch(removeWishList(id))
     }
    return (
        <>
        <Meta title='Fashions | WishList'/>
        <Navbar />
            <Announcement />
            <div className="small-container cart-page">
                <table>
                    <thead>
                        <tr>
                            <th>Product WishList</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {wishListItems.map(item => (
                            <div className="cart-info" key={item.product}>
                            <div className="image-container">
                                <img src={item.image} alt={item.name}/>
                                <Icon onClick={() => removeWishListHandler(item.product)}>
                                    <IoMdHeart style={{color: 'red'}}/>
                                </Icon>
                            </div>
                                <div>
                                    <p>{item.name}</p>
                                    <span style={{fontFamily: 'Inter', fontSize:'16px'}}>Category: {item.category}</span> <br />
                                    <span style={{fontFamily: 'Inter', fontSize:'16px'}}>Brand: {item.brand}</span><br />
                                    <span style={{fontFamily: 'FavFont'}}><Rating value={item.rating} text={`${item.numReviews} reviews`}color='#FFB344' fontSize='15px' marginBottom='10px' marginTop='5px'/></span>
                                    <span style={{fontWeight: 'bold'}}>${item.price},00</span><br />
                                    <span>
                                      <Link to={`/products/item/${item.product}`}>
                                        <Details>
                                        <BiSearchAlt
                                        style={{
                                            marginRight: "6px",
                                            fontSize: "22px",
                                            marginTop: "-3px",
                                            marginLeft: "-4px",
                                        }}
                                        />
                                        DETAILS
                                        </Details>
                                       </Link>
                                    </span>
                                </div>
                            </div>
                            ))}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        <NavbarBottom/>
        </>
    )
}

export default Wishlist
