import axios from "axios";
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "../constants/wishlistConstants";

export const addToWishList = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
  
    dispatch({
      type: WISHLIST_ADD_ITEM,
      payload: {
        product: data._id,
        brand: data.brand,
        category: data.category,
        numReviews: data.numReviews,
        name: data.name,
        image: data.image,
        price: data.price,
        rating: data.rating,
      },
    })

    localStorage.setItem('wishListItems', JSON.stringify(getState().wishList.wishListItems))
}

export const removeWishList = (id) => (dispatch, getState) => {
  dispatch({
    type: WISHLIST_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('wishListItems', JSON.stringify(getState().wishList.wishListItems))
}