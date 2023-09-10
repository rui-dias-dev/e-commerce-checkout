import { useCart } from "../../context/CartProvider";
import { Trash } from "@phosphor-icons/react";

interface RemoveFromCartButtonProps {
    id: string;
}

export const RemoveFromCartButton = ({ id }: RemoveFromCartButtonProps) => {
    const { removeProductFromCart } = useCart();

    return (
        <button
            onClick={() => removeProductFromCart(id)}
            className="flex items-center gap-1 rounded-md bg-base-button px-2 py-3"
            type="button"
        >
            <Trash className="h-4 w-4 text-purple" />
            <span className="text-xs uppercase text-base-text">Remover</span>
        </button>
    );
};
