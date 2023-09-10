import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { CartProduct } from "../@types/product";
import {
    addNewProductAction,
    removeProductAction,
    resetCartAction,
    updateProductQuantityAction,
} from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

interface CartContextProps {
    cartProducts: CartProduct[];
    addProductToCart: (newProduct: CartProduct) => void;
    removeProductFromCart: (productId: string) => void;
    updateProductQuantity: (productId: string, amount: number) => void;
    resetCart: () => void;
}

interface CartContextproviderProps {
    children: ReactNode;
}

const Cart = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartContextproviderProps) => {
    const [cartProducts, dispatch] = useReducer(
        cartReducer,
        [],
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem(
                "@e-commerce-checkout:cart-products-1.0.0"
            );

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return initialState;
        }
    );
    const addProductToCart = (newProduct: CartProduct) => {
        dispatch(addNewProductAction(newProduct));
    };

    const removeProductFromCart = (productId: string) => {
        dispatch(removeProductAction(productId));
    };

    const updateProductQuantity = (productId: string, amount: number) => {
        dispatch(updateProductQuantityAction(productId, amount));
    };

    const resetCart = () => {
        dispatch(resetCartAction());
    };

    useEffect(() => {
        const stateJSON = JSON.stringify(cartProducts);

        localStorage.setItem(
            "@e-commerce-checkout:cart-products-1.0.0",
            stateJSON
        );
    }, [cartProducts]);

    return (
        <Cart.Provider
            value={{
                cartProducts,
                addProductToCart,
                removeProductFromCart,
                updateProductQuantity,
                resetCart
            }}
        >
            {children}
        </Cart.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartContextProps {
    const context = useContext(Cart);
    return context;
}
