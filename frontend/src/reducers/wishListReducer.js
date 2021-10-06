import { WISHLIST_ADD_ITEM } from "../constants/wishlistConstants";

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
        default :
            return state    
    }
}