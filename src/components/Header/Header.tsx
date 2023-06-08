import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";
import { useCart } from "../../context/CartProvider";

export const Header = () => {
    const { cartProducts } = useCart();

    console.log(cartProducts)
    return (
        <header className="m-auto flex max-w-6xl items-center justify-between px-8 py-8 sticky top-0">
            <img src={Logo} />
            <div className="flex gap-3">
                <div className="flex items-center gap-2 rounded-md bg-purple-light p-2 text-purple-dark">
                    <MapPin fill="" />
                    <span>Porto Alegre, RS</span>
                </div>
                <button className="relative flex h-10 w-10 items-center justify-center rounded-md bg-yellow-light p-2 text-yellow-dark">
                    <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-yellow-dark p-1 text-xs text-base-white flex items-center justify-center">
                        {cartProducts?.length}
                    </span>
                    <ShoppingCart weight="fill" />
                </button>
            </div>
        </header>
    );
};
