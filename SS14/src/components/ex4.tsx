import React, { Component } from "react";

interface StateType {
  clickCount: number;
}

export default class Bai4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleChange = () => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
  };

  render() {
    const { clickCount } = this.state;
    return (
      <div
        style={{
          textAlign: clickCount % 2 === 0 ? "center" : "left"
        }}
      >
        <h1>Slogan: "Học code để đi làm"</h1>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}