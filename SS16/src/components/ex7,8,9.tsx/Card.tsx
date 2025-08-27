import React from "react";
import type { Product } from "./data/product";


export type CartItem = Product & { qty: number };

type Props = {
  cart: CartItem[];
  onIncrease: (item: CartItem) => void;
  onDecrease: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
};

export default function Cart({ cart, onIncrease, onDecrease, onRemove }: Props) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{item.name}</div>
                <div>
                  <button onClick={() => onDecrease(item)}>-</button>
                  <span style={{ margin: "0 8px" }}>{item.qty}</span>
                  <button onClick={() => onIncrease(item)}>+</button>
                </div>
              </div>
              <button onClick={() => onRemove(item)}>🗑</button>
            </div>
          ))}
          <div className="total">Tổng tiền: {total.toLocaleString()} đ</div>
        </>
      )}
    </div>
  );
}