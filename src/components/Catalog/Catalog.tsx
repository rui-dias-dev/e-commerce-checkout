import { useCallback, useEffect, useState } from "react";
import { Product as ProductType } from "../../@types/product";
import { Product } from "../Product/Product";

export const Catalog = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const API_KEY = import.meta.env.VITE_JSON_SERVER_URL;

  console.log("API_KEY: ", API_KEY)
  console.log("products: ", products)

  const getProducts = useCallback(async () => {
    return fetch(`${API_KEY}/products`).then(async (response) => {
      const res = await response.json();
      setProducts(res);
    });
  }, [API_KEY]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section className="m-auto my-24 grid max-w-6xl grid-cols-catalog gap-8 px-6">
      {products ? (
        products.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <></>
      )}
    </section>
  );
};
