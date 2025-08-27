import React from "react";
import type { Product } from "../data/product";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
     
      <h3 className="product-name">{product.name}</h3>

      <p>{product.price.toLocaleString()} đ</p>

      <button onClick={() => onAddToCart(product)}>
        🛒 Thêm vào giỏ hàng
      </button>
    </div>
  );
}