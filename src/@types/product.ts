export interface TagProps {
    name: string;
}

export interface Product {
    id: string;
    image: string;
    tags: TagProps[];
    title: string;
    subtitle: string;
    price: string;
}

export interface ProductProps {
    product: Product;
}

export interface CartProduct extends Product {
    quantity: number;
}
