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

/**
 * Sum all cart products multiplied by their quantity
 *
 * @param cartProducts Array with all the products added to cart
 * @returns the sum of all prices
 */
export const sumSubTotalProductsPrice = (cartProducts: CartProduct[]) => {
    return cartProducts.reduce(
        (previous, current) =>
            previous + Number(current.price) * current.quantity,
        0
    );
};

export const updateQuantity = (
    product: CartProduct,
    productId: string,
    amount: number
) => {
    if (product.id === productId) {
        product.quantity = amount;

        return product;
    }
    return product;
};
