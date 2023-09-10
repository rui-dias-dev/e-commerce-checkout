import { MapPin } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { CheckoutButton } from "./CheckoutButton";
import { useAddress } from "../../context/AddressProvider";

export const Header = () => {
    const { address } = useAddress();
    const location = address?.location
        ? `${address.location}, ${address.city}`
        : address?.city;
    return (
        <header className="sticky top-0 z-10 m-auto flex max-w-6xl items-center justify-between px-8 py-8">
            <NavLink to={"/"} title="Home">
                <img src={Logo} width={85} height={40} alt="" />
            </NavLink>
            <div className="flex gap-3">
                {location ? (
                    <div className="flex items-center gap-2 rounded-md bg-purple-light p-2 text-purple-dark">
                        <MapPin
                            width={22}
                            height={22}
                            weight="fill"
                            className="text-purple"
                        />
                        <span>{location}</span>
                    </div>
                ) : null}
                <CheckoutButton />
            </div>
        </header>
    );
};
