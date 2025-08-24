import React, { Component, createRef } from "react";

type State = {
  name: string;
  email: string;
  password: string;
  phone: string;
  message: string;
}

export default class Bai7 extends Component<{}, State> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      message: "",
    };
  }

  componentDidMount() {
    // Focus ô nhập tên khi mở form
    this.nameInputRef.current?.focus();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, phone } = this.state;

    // Validate
    if (!name || !email || !password) {
      this.setState({ message: "Tên, Email và Mật khẩu không được để trống" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Kiểm tra email trùng
    const exists = users.some((user: any) => user.email === email);
    if (exists) {
      this.setState({ message: "Email đã tồn tại" });
      return;
    }

    users.push({ name, email, password, phone });
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      name: "",
      email: "",
      password: "",
      phone: "",
      message: "Đăng ký tài khoản thành công",
    });

    // Focus lại vào input tên
    this.nameInputRef.current?.focus();
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "350px",
          margin: "40px auto",
          padding: "20px",
          borderRadius: "10px",
          fontFamily: "sans-serif",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#222" }}>
          Đăng ký tài khoản
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "15px", color: "#605d76"}}>
            <label>Tên sinh viên</label>
            <input
              ref={this.nameInputRef}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                marginTop: "5px", 
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none" 
            }}
            />
          </div>

          <div style={{ marginBottom: "15px", color: "#605d76" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                marginTop: "5px", 
                border: "1px solid #ccc",
                borderRadius: "5px", 
                outline: "none"  
            }}
            />
          </div>

          <div style={{ marginBottom: "15px", color: "#605d76"  }}>
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px", 
                outline: "none"  
            }}
            />
          </div>

          <div style={{ marginBottom: "15px", color: "#605d76"}}>
            <label>Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                marginTop: "5px", 
                border: "1px solid #ccc",
                borderRadius: "5px", 
                outline: "none"
            }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "106%",
              padding: "12px",
              background: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          >
            Đăng ký
          </button>
        </form>

        {this.state.message && (
    <p
        style={{
        marginTop: "15px",
        color:
            this.state.message === "Tên, Email và Mật khẩu không được để trống" ||
            this.state.message === "Email đã tồn tại"
            ? "red"
            : "green",
        textAlign: "center",
        }}
    >
        {this.state.message}
    </p>
    )}
      </div>
    );
  }
}