import React, { Component } from "react";

// Định nghĩa kiểu dữ liệu User trong localStorage
interface User {
  email: string;
  password: string;
}

interface LoginState {
  email: string;
  password: string;
  message: string;
}

export default class Bai8 extends Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  // Lấy giá trị từ input
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
  };

  // Xử lý submit form
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (email.trim() === "" || password.trim() === "") {
      this.setState({ message: "Email và mật khẩu không được để trống" });
      return;
    }

    // Lấy dữ liệu users từ localStorage
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    // Kiểm tra user có tồn tại không
    const foundUser = users.find(
      (user: User) => user.email === email && user.password === password
    );

    if (foundUser) {
      this.setState({ message: "Đăng nhập thành công" });
    } else {
      this.setState({ message: "Đăng nhập thất bại" });
    }
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
        <h2 style={{ textAlign: "center", marginRight: "100px"}}>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              style={{ 
                width: "70%", 
                padding: "10px", 
                marginTop: "5px", 
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"  
            }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Mật khẩu</label>
            <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              style={{ 
                width: "70%", 
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
              width: "76%",
              padding: "12px",
              background: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          >
            Đăng nhập
          </button>
        </form>

        {this.state.message && (
          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              marginRight: "100px",
              color:
                this.state.message === "Đăng nhập thành công" ? "green" : "red",
            }}
          >
            {this.state.message}
          </p>
        )}
      </div>
    );
  }
}