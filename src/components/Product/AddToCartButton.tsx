import { useCart } from "../../context/CartProvider";

import { Product } from "../../@types/product";

import { ShoppingCart } from "@phosphor-icons/react";

interface TesteProps {
    product: Product;
    quantity: number;
}

export const AddToCartButton = ({ product, quantity }: TesteProps) => {
    const { addProductToCart } = useCart();

    const handleAddProductToCart = () => {
        addProductToCart({ ...product, quantity });
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
