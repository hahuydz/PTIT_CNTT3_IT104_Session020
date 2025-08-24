import React, { Component } from "react";

interface State {
  gender: string;
}

export default class Bai6 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: ""
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "300px",
          margin: "40px auto",
          padding: "20px",
          color: "#475381"
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#475381" }}>
          Chọn giới tính
        </h3>

        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
              style={{ accentColor: "#007bff" }}
            />
            <label style={{ marginLeft: "8px" }}>Nam</label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
              style={{ accentColor: "#007bff" }}
            />
            <label style={{ marginLeft: "8px" }}>Nữ</label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
              style={{ accentColor: "#007bff" }}
            />
            <label style={{ marginLeft: "8px" }}>Khác</label>
          </div>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}