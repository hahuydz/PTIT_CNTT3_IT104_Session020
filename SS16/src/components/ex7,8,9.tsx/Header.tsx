import React from "react";

type Props = {
  cartCount: number;
  onToggleCart: () => void;
};

export default function Header({ cartCount, onToggleCart }: Props) {
  return (
    <div className="header">
      <div>
        <span style={{ marginRight: "20px" }}>Trang chủ</span>
        <span>Danh sách sản phẩm</span>
      </div>
      <button onClick={onToggleCart}>
        🛒
        {cartCount > 0 && <span className="badge">{cartCount}</span>}
      </button>
    </div>
  );
}