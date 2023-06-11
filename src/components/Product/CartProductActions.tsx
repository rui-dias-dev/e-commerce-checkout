import { useEffect, useState } from "react";

import { useCart } from "../../context/CartProvider";

import { CartProductProps } from "../../@types/product";

import { Quantity } from "./Quantity";
import { RemoveFromCartButton } from "./RemoveFromCartButton";

export const CartProductActions = ({ product }: CartProductProps) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const { updateQuantity } = useCart();

    const handleDecreaseQuantity = () => {
        setQuantity((prev) => --prev);
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => ++prev);
    };

    useEffect(() => {
        updateQuantity(product.id, quantity);
    }, [quantity]);

    return (
        <div className="flex">
            <Quantity
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                quantity={quantity}
            />

            <RemoveFromCartButton id={product.id} />
        </div>
    );
};
