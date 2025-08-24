import React, { Component } from "react";

interface ProductFormState {
  productCode: string;
  productName: string;
  price: string;
  quantity: string;
}

export default class Bai5 extends Component<{}, ProductFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
        price: "",
        productName: "",
        productCode: "",
        quantity: ""
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    } as unknown as Pick<ProductFormState, keyof ProductFormState>);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = {
        price: parseFloat(this.state.price),
        productCode: this.state.productCode,
        productName: this.state.productName,
        quantity: parseInt(this.state.quantity)
    };
    console.log("Sản phẩm vừa nhập:", product);
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "300px",
          margin: "40px auto",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          fontFamily: "sans-serif"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Thêm mới sản phẩm
        </h2>

        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Mã sản phẩm
            </label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
              required
              style={{
                width: "90%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Tên sản phẩm
            </label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
              required
              style={{
                width: "90%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              required
              style={{
                width: "90%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Số lượng
            </label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              min="1"
              required
              style={{
                width: "90%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              width: "96%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}