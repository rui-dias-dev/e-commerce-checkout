import { MapPin } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { CheckoutButton } from "./CheckoutButton";

export const Header = () => {
    return (
        <header className="sticky top-0 m-auto flex max-w-6xl items-center justify-between px-8 py-8">
            <NavLink to={"/"} title="Home">
                <img src={Logo} width={85} height={40} alt="" />
            </NavLink>
            <div className="flex gap-3">
                <div className="flex items-center gap-2 rounded-md bg-purple-light p-2 text-purple-dark">
                    <MapPin fill="" />
                    <span>Porto Alegre, RS</span>
                </div>
                <CheckoutButton />
            </div>
        </header>
    );
};
