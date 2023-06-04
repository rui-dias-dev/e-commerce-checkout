import { ChangeEvent, useState } from "react";

import { ProductProps, TagProps } from "../../@types/product";

import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Tag } from "./Tag";
import { priceFormatter } from "../../utils/formatter";

export const Product = ({ product }: ProductProps) => {
    const [quantity, setQuantity] = useState(1);

    const { image, price, subtitle, tags, title } = product;

    const handleDecreaseQuantity = () => {
        setQuantity((prev) => --prev);
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => ++prev);
    };

    return (
        <div className="flex flex-col rounded-bl-4xl rounded-br-md rounded-tl-md rounded-tr-4xl bg-base-card p-5">
            <img className="m-auto -mt-10 h-32 w-32" src={image} alt="" />
            <ul className="mt-3 flex flex-1 justify-center gap-1 items-center">
                {tags.map((tag: TagProps) => (
                    <Tag key={tag.name} name={tag.name} />
                ))}
            </ul>
            <h4 className="mt-4 text-center text-xl text-base-title">
                {title}
            </h4>
            <p className="mt-2 text-center text-sm text-base-subtitle">
                {subtitle}
            </p>
            <footer className="mt-8 flex items-center">
                <h5 className="text-2xl font-bold text-base-text">
                    {priceFormatter.format(+price)}
                </h5>
                <div className="ml-5 flex rounded-md bg-base-button">
                    <button
                        className="px-2 py-3 text-purple"
                        onClick={handleDecreaseQuantity}
                        disabled={quantity === 1}
                    >
                        <Minus className="" />
                    </button>
                    <span className="w-5 bg-transparent text-center flex items-center justify-center">
                        {quantity}
                    </span>
                    <button
                        className="px-2 py-3 text-purple"
                        onClick={handleIncreaseQuantity}
                    >
                        <Plus />
                    </button>
                </div>
                <button className="ml-2 rounded-md bg-purple-dark p-2 text-base-white">
                    <ShoppingCart weight="fill" width={22} height={22} />
                </button>
            </footer>
        </div>
    );
};
