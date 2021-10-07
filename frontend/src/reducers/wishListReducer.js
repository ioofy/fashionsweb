import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "../constants/wishlistConstants";

export const wishListReducer = (
    state = { wishListItems: [] },
    action
) => {
    switch (action.type) {

        case WISHLIST_ADD_ITEM:
            const item = action.payload
            const existItem = state.wishListItems.find((x) => x.product === item.product)

            if(existItem){
                return{
                    ...state,
                    wishListItems: state.wishListItems.map((x) => x.product === existItem.product ? item : x),
                }
            }

            else{
                return{
                    ...state,
                    wishListItems: [...state.wishListItems, item]
                }
            }
        case WISHLIST_REMOVE_ITEM:
            return {
                ...state,
                wishListItems: state.wishListItems.filter((x) => x.product !== action.payload),
            }
        default :
            return state    
    }
}