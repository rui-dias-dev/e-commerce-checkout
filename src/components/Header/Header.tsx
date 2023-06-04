import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";

export const Header = () => {
    return (
        <header className="m-auto flex max-w-6xl items-center justify-between px-8 py-8">
            <img src={Logo} />
            <div className="flex gap-3">
                <div className="flex items-center gap-2 rounded-md bg-purple-light p-2 text-purple-dark">
                    <MapPin fill="" />
                    <span>Porto Alegre, RS</span>
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-light p-2 text-yellow-dark">
                    <ShoppingCart />
                </button>
            </div>
        </header>
    );
};
