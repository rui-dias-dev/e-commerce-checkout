import { CartProduct } from "../../@types/product";
import { updateQuantity } from "../../lib/cart/cart";
import { CartActionTypes, CartActions } from "./actions";

export function cartReducer(state: CartProduct[], action: CartActions) {
    switch (action.type) {
        case CartActionTypes.ADD_NEW_PRODUCT:
            return [...state, action.payload.newProduct];

        case CartActionTypes.REMOVE_PRODUCT:
            return state.filter(
                (product: CartProduct) =>
                    product.id !== action.payload.productId
            );

        case CartActionTypes.UPDATE_PRODUCT_QUANTITY:
            return state.map((product: CartProduct) =>
                updateQuantity(
                    product,
                    action.payload.productId,
                    action.payload.amount
                )
            );

        default:
            return state;
    }
}
