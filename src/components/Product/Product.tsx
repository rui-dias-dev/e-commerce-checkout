import { ProductProps, TagProps } from "../../@types/product";

import { priceFormatter } from "../../utils/formatter";

import { ProductActions } from "./ProductActions";
import { Tag } from "./Tag";

export const Product = ({ product }: ProductProps) => {
    const { image, price, subtitle, tags, title } = product;

    return (
        <div className="flex flex-col rounded-bl-4xl rounded-br-md rounded-tl-md rounded-tr-4xl bg-base-card p-5">
            <img className="m-auto -mt-10 h-32 w-32" src={image} alt="" />
            <ul className="mt-3 flex flex-1 items-center justify-center gap-1">
                {tags.map((tag: TagProps) => (
                    <Tag key={tag.name} name={tag.name} />
                ))}
            </ul>
            <h2 className="mt-4 text-center text-xl text-base-title">
                {title}
            </h2>
            <p className="mt-2 text-center text-sm text-base-subtitle">
                {subtitle}
            </p>
            <footer className="mt-8 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-base-text">
                    {priceFormatter.format(+price)}
                </h3>
                <ProductActions product={product} />
            </footer>
        </div>
    );
};
