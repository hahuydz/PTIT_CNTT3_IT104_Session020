import React from "react";
import type { Product } from "../data/product";
import ProductCard from "./ProductCart";

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export default function ProductList({ products, onAddToCart }: Props) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}