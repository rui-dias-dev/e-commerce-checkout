import { useEffect, useState } from "react";

import { useCart } from "../../context/CartProvider";

import { CartProductProps } from "../../@types/product";

import { Quantity } from "./Quantity";
import { RemoveFromCartButton } from "./RemoveFromCartButton";

export const CartProductActions = ({ product }: CartProductProps) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const { updateProductQuantity } = useCart();

    const handleDecreaseQuantity = () => {
        setQuantity((prev) => --prev);
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => ++prev);
    };

    useEffect(() => {
        updateProductQuantity(product.id, quantity);
    }, [quantity]);

    return (
        <div className="flex flex-wrap gap-3 lg:flex-nowrap">
            <Quantity
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                quantity={quantity}
            />

            <RemoveFromCartButton id={product.id} />
        </div>
    );
};
