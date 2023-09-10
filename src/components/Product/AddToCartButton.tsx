import { useCart } from "../../context/CartProvider";

import { Product } from "../../@types/product";

import { ShoppingCart } from "@phosphor-icons/react";

interface AddToCartButtonProps {
    product: Product;
    quantity: number;
}

export const AddToCartButton = ({
    product,
    quantity,
}: AddToCartButtonProps) => {
    const { addProductToCart, cartProducts, updateProductQuantity } = useCart();

    const handleAddProductToCart = () => {
        const productToAddQuantity = cartProducts.find(
            (productFromCart) => productFromCart.id === product.id
        );
        if (productToAddQuantity) {
            const amount = quantity + productToAddQuantity.quantity;
            updateProductQuantity(productToAddQuantity.id, amount);
        } else {
            addProductToCart({ ...product, quantity });
        }
    };

    return (
        <button
            className="ml-2 rounded-md bg-purple-dark p-2 text-base-white"
            onClick={handleAddProductToCart}
            title="Comprar"
            type="button"
        >
            <ShoppingCart weight="fill" width={22} height={22} />
        </button>
    );
};
