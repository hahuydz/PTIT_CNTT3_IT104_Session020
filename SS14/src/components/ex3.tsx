import React, { Component } from 'react';

interface InitState {
  companyName: string;
}

export default class Bai3 extends Component<{}, InitState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      companyName: 'Rikkei Academy'
    };
  }

  handleChange = () => {
    this.setState(prevState => ({
      companyName: prevState.companyName === 'Rikkei Academy' 
        ? 'Rikkei Soft' 
        : 'Rikkei Academy'
    }));
  };

  render() {
    return (
      <div 
        style={{ 
          textAlign: this.state.companyName === 'Rikkei Academy' ? 'center' : 'left' 
        }}
      >
        <h1>Company: {this.state.companyName}</h1>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}