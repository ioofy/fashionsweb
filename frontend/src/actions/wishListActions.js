import axios from "axios";
import { WISHLIST_ADD_ITEM } from "../constants/wishlistConstants";

export const addToWishList = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
  
    dispatch({
      type: WISHLIST_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
      },
    })

    localStorage.setItem('wishListItems', JSON.stringify(getState().wishList.wishListItems))
}