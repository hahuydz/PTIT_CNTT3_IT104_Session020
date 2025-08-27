import React, { Component } from 'react';

interface ButtonListState {
  selectedButton: string;
}

class ButtonList extends Component<{}, ButtonListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedButton: 'Primary',
    };
  }

  handleButtonClick = (buttonType: string) => {
    this.setState({ selectedButton: buttonType });
  };

  render() {
    const { selectedButton } = this.state;
    const buttonStyle = {
      padding: '10px 20px',
      margin: '0 5px',
      border: 'none',
      cursor: 'pointer',
      color: '#ffffff',
    };

    return (
      <div>
        <div>
          <button
            style={{
              backgroundColor: selectedButton === 'Primary' ? '#007bff' : '#0056b3',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: buttonStyle.color,
            }}
            onClick={() => this.handleButtonClick('Primary')}
          >
            Primary
          </button>
          <button
            style={{
              backgroundColor: selectedButton === 'Secondary' ? '#6c757d' : '#5a6268',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: buttonStyle.color,
            }}
            onClick={() => this.handleButtonClick('Secondary')}
          >
            Secondary
          </button>
          <button
            style={{
              backgroundColor: selectedButton === 'Success' ? '#28a745' : '#218838',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: buttonStyle.color,
            }}
            onClick={() => this.handleButtonClick('Success')}
          >
            Success
          </button>
          <button
            style={{
              backgroundColor: selectedButton === 'Warning' ? '#ffc107' : '#e0a800',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: buttonStyle.color,
            }}
            onClick={() => this.handleButtonClick('Warning')}
          >
            Warning
          </button>
          <button
            style={{
              backgroundColor: selectedButton === 'Danger' ? '#dc3545' : '#c82333',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: buttonStyle.color,
            }}
            onClick={() => this.handleButtonClick('Danger')}
          >
            Danger
          </button>
          <button
            style={{
              backgroundColor: selectedButton === 'Info' ? '#17a2b8' : '#138496',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: buttonStyle.color,
            }}
            onClick={() => this.handleButtonClick('Info')}
          >
            Info
          </button>
          <button
            style={{
              backgroundColor: selectedButton === 'Light' ? '#f8f9fa' : '#e9ecef',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: selectedButton === 'Light' ? '#000000' : '#495057',
            }}
            onClick={() => this.handleButtonClick('Light')}
          >
            Light
          </button>
          <button
            style={{
              backgroundColor: selectedButton === 'Dark' ? '#343a40' : '#212529',
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: buttonStyle.color,
            }}
            onClick={() => this.handleButtonClick('Dark')}
          >
            Dark
          </button>
          <button
            style={{
              padding: buttonStyle.padding,
              margin: buttonStyle.margin,
              border: buttonStyle.border,
              cursor: buttonStyle.cursor,
              color: '#007bff',
              textDecoration: 'underline',
            }}
            onClick={() => this.handleButtonClick('Link')}
          >
            Link
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonList;