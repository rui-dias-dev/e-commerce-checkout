import { useState } from "react";

import { ProductProps } from "../../@types/product";

import { Quantity } from "./Quantity";
import { AddToCartButton } from "./AddToCartButton";

export const ProductActions = ({ product }: ProductProps) => {
    const [quantity, setQuantity] = useState(1);
    const handleDecreaseQuantity = () => {
        setQuantity((prev) => --prev);
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => ++prev);
    };
    return (
        <div className="flex">
            <Quantity
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                quantity={quantity}
            />
            <AddToCartButton product={product} quantity={quantity} />
        </div>
    );
};
