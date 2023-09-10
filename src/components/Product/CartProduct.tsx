import { CartProductProps } from "../../@types/product";

import { priceFormatter } from "../../utils/formatter";

import { CartProductActions } from "./CartProductActions";

export const CartProduct = ({ product }: CartProductProps) => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <img className="h-16 w-16" src={product.image} alt="" />
            <div className="ml-5 flex flex-col gap-2">
                <p>{product.title}</p>

                <CartProductActions product={product} />
            </div>
            <p className="ml-auto self-start font-bold text-base-text">
                {priceFormatter.format(+product.price)}
            </p>
        </div>
    );
};
