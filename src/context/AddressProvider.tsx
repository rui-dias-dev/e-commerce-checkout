import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { AddressType } from "../components/Checkout/CheckoutForm";
import { addressReducer } from "../reducers/address/reducer";
import { createNewAddressAction } from "../reducers/address/actions";

interface AddressContextProps {
    address: AddressType | null;
    createNewAddress: (newAddress: AddressType) => void;
}

interface AddressContextProviderProps {
    children: ReactNode;
}

const Address = createContext({} as AddressContextProps);

export const AddressProvider = ({ children }: AddressContextProviderProps) => {
    const [address, dispatch] = useReducer(
        addressReducer,
        null,
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem(
                "@e-commerce-checkout:address-1.0.0"
            );

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return initialState;
        }
    );

    const createNewAddress = (newAddress: AddressType) => {
        dispatch(createNewAddressAction(newAddress));
    };

    useEffect(() => {
        const stateJSON = JSON.stringify(address);

        localStorage.setItem(
            "@e-commerce-checkout:address-1.0.0",
            stateJSON
        );
    }, [address]);

    return (
        <Address.Provider
            value={{
                address,
                createNewAddress,
            }}
        >
            {children}
        </Address.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAddress(): AddressContextProps {
    const context = useContext(Address);
    return context;
}
