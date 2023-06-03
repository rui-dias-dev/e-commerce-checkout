import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";

export const Header = () => {
    return (
        <header className="flex max-w-6xl justify-between items-center py-8 m-auto">
            <img src={Logo} />
            <div className="flex gap-3">
                <div className="p-2 flex gap-2 items-center bg-purple-light text-purple-dark rounded-md">
                    <MapPin fill="" />
                    <span>Porto Alegre, RS</span>
                </div>
                <button className="flex items-center justify-center bg-yellow-light text-yellow-dark p-2 w-10 h-10 rounded-md">
                    <ShoppingCart />
                </button>
            </div>
        </header>
    );
};
