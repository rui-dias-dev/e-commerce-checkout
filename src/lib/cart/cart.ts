import { CartProduct } from "../../@types/product";


/**
 * verify if the product to add already exists in cart.
 * 
 * @param cart the current Cart
 * @param newProduct the product you want to add to Cart
 * @returns return true if product already exists and false if not
 */
export const isProductAlreadyInCart = (
    cart: CartProduct[],
    newProduct: CartProduct
) => {
    return cart.some((product: CartProduct) => product.id === newProduct.id);
};
