import { Minus, Plus } from "@phosphor-icons/react";

export interface QuantityProps {
    quantity: number;
    handleDecreaseQuantity: () => void;
    handleIncreaseQuantity: () => void;
}

export const Quantity = ({
    quantity,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
}: QuantityProps) => {
    return (
        <div className="flex rounded-md bg-base-button">
            <button
                className="px-2 py-3 text-purple"
                onClick={handleDecreaseQuantity}
                disabled={quantity === 1}
                title="remover"
                type="button"
            >
                <Minus className="" />
            </button>
            <span className="flex w-5 items-center justify-center bg-transparent text-center">
                {quantity}
            </span>
            <button
                className="px-2 py-3 text-purple"
                onClick={handleIncreaseQuantity}
                title="adicionar"
                type="button"
            >
                <Plus />
            </button>
        </div>
    );
};
