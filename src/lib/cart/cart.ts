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

export const sumSubTotalProductsPrice = (cartProducts: CartProduct[]) => {

    console.log("cartProducts: ", cartProducts)
    return cartProducts.reduce(
        (previous, current) =>
            previous + Number(current.price) * current.quantity,
        0
    );
}
