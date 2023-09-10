import { CartProduct } from "../../@types/product";

export enum CartActionTypes {
    ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY",
    RESET_CART = "RESET_CART",
}

export function addNewProductAction(newProduct: CartProduct) {
    return {
        type: CartActionTypes.ADD_NEW_PRODUCT,
        payload: {
            newProduct,
        },
    } as const;
}

export function removeProductAction(productId: string) {
    return {
        type: CartActionTypes.REMOVE_PRODUCT,
        payload: {
            productId,
        },
    } as const;
}

export function updateProductQuantityAction(productId: string, amount: number) {
    return {
        type: CartActionTypes.UPDATE_PRODUCT_QUANTITY,
        payload: {
            productId,
            amount,
        },
    } as const;
}

export function resetCartAction() {
    return {
        type: CartActionTypes.RESET_CART,
    } as const;
}

export type CartActions =
    | ReturnType<typeof addNewProductAction>
    | ReturnType<typeof removeProductAction>
    | ReturnType<typeof updateProductQuantityAction>
    | ReturnType<typeof resetCartAction>;
