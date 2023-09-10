import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import { ShoppingCart } from "@phosphor-icons/react";

export const CheckoutButton = () => {
    const { cartProducts } = useCart();

    return (
        <NavLink
            to={"/checkout"}
            title="Checkout"
            className="relative flex h-10 w-10 items-center justify-center rounded-md bg-yellow-light p-2 text-yellow-dark"
        >
            <span className="absolute right-0 top-0 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-yellow-dark p-1 text-xs text-base-white">
                {cartProducts?.length}
            </span>
            <ShoppingCart weight="fill" />
        </NavLink>
    );
};
