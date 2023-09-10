import { useCart } from "../../context/CartProvider";

import { CartProduct as CartProductType } from "../../@types/product";

import { priceFormatter } from "../../utils/formatter";
import { sumSubTotalProductsPrice } from "../../lib/cart/cart";

import { Button } from "../ui/Button";
import { CartProduct } from "../Product/CartProduct";

export const Summary = () => {
    const { cartProducts } = useCart();

    const subTotal = sumSubTotalProductsPrice(cartProducts);
    const DELIVERY_PRICE = 3.5;
    const totalPrice = subTotal + DELIVERY_PRICE;

    return (
        <div className="mt-4 rounded-bl-4xl rounded-br-md rounded-tl-md rounded-tr-4xl bg-base-card p-10">
            {cartProducts.length ? (
                <ul>
                    {cartProducts.map((product: CartProductType) => (
                        <li
                            className="border-b py-6 first-of-type:pt-0"
                            key={product.id}
                        >
                            <CartProduct product={product} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="mb-6 border-b pb-6 text-base-text">
                    Nenhum produto adicionado ao carrinho.
                </p>
            )}
            <section className="mt-6 grid gap-3">
                <p className="flex justify-between text-base-text">
                    <span className="text-sm">Total de items</span>
                    <span>{priceFormatter.format(+subTotal)}</span>
                </p>
                <p className="flex justify-between text-base-text">
                    <span className="text-sm">Entrega</span>
                    <span>{priceFormatter.format(3.5)}</span>
                </p>
                <p className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>{priceFormatter.format(totalPrice)}</span>
                </p>
            </section>
            <Button
                className="mt-6 w-full bg-yellow text-center text-sm font-bold uppercase text-base-white"
                type="submit"
                disabled={!cartProducts.length}
            >
                Confirmar pedido
            </Button>
        </div>
    );
};
