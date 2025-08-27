import React, { Component } from 'react';

interface ClickCounterState {
  count: number;
}

class ClickCounter extends Component<{}, ClickCounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Bạn đã nhấp {this.state.count} lần.</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickCounter;