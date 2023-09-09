import { ReactNode, createContext, useContext, useReducer } from "react";
import { CartProduct } from "../@types/product";
import {
    addNewProductAction,
    removeProductAction,
    updateProductQuantityAction,
} from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

interface CartContextProps {
    cartProducts: CartProduct[];
    addProductToCart: (newProduct: CartProduct) => void;
    removeProductFromCart: (productId: string) => void;
    updateProductQuantity: (productId: string, amount: number) => void;
}

interface CartContextproviderProps {
    children: ReactNode;
}

const Cart = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartContextproviderProps) => {
    const [cartProducts, dispatch] = useReducer(cartReducer, []);

    const addProductToCart = (newProduct: CartProduct) => {
        dispatch(addNewProductAction(newProduct));
    };

    const removeProductFromCart = (productId: string) => {
        dispatch(removeProductAction(productId));
    };

    const updateProductQuantity = (productId: string, amount: number) => {
        dispatch(updateProductQuantityAction(productId, amount));
    };

    return (
        <Cart.Provider
            value={{
                cartProducts,
                addProductToCart,
                removeProductFromCart,
                updateProductQuantity,
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
