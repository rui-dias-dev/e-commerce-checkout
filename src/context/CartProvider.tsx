import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useState,
} from "react";
import { CartProduct } from "../@types/product";
import { Product } from "../components/Product/Product";
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
        setCartProducts((prev: CartProduct[]) => {
            if (isProductAlreadyInCart(prev, newProduct)) {
                return prev.map((product: CartProduct) => {
                    if (product.id === newProduct.id) {
                        return { ...product, quantity: product.quantity + newProduct.quantity };
                      }
                      return product;
                });
            } else {
                return [...prev, newProduct];
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

export function useCart(): CartContextProps {
    const context = useContext(Cart);
    return context;
}
