import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useState,
} from "react";
import { CartProduct } from "../@types/product";
import { isProductAlreadyInCart } from "../lib/cart/cart";

interface CartContextProps {
    cartProducts: CartProduct[];
    setCartProducts: Dispatch<React.SetStateAction<CartProduct[]>>;
    addProductToCart: (newProduct: CartProduct) => void;
    removeProductFromCart: (productId: string) => void;
}

interface CartContextproviderProps {
    children: ReactNode;
}

const Cart = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartContextproviderProps) => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    const addProductToCart = (newProduct: CartProduct) => {
        setCartProducts((previousCart: CartProduct[]) => {
            if (isProductAlreadyInCart(previousCart, newProduct)) {
                return previousCart.map((product: CartProduct) => {
                    if (product.id === newProduct.id) {
                        return {
                            ...product,
                            quantity: product.quantity + newProduct.quantity,
                        };
                    }
                    return product;
                });
            } else {
                return [...previousCart, newProduct];
            }
        });
    };

    const removeProductFromCart = (productId: string) => {
        setCartProducts((prev: CartProduct[]) =>
            prev.filter((product: CartProduct) => product.id !== productId)
        );
    };

    return (
        <Cart.Provider
            value={{
                cartProducts,
                setCartProducts,
                addProductToCart,
                removeProductFromCart,
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
