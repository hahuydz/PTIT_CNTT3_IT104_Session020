import React, { Component } from 'react';

interface ThemeSwitcherState {
  isDarkMode: boolean;
}

class ThemeSwitcher extends Component<{}, ThemeSwitcherState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  handleThemeSwitch = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;
    const containerStyle = {
      backgroundColor: isDarkMode ? '#333333' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
    };
    const buttonStyle = {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
    };
    const hoverStyle = {
      backgroundColor: '#0056b3',
    };

    return (
      <div style={containerStyle}>
        {isDarkMode ? (
          <div>
            <h2>Chế độ Tối đang bật</h2>
            <button
              onClick={this.handleThemeSwitch}
              style={{
                backgroundColor: isDarkMode ? hoverStyle.backgroundColor : buttonStyle.backgroundColor,
                color: buttonStyle.color,
                border: buttonStyle.border,
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
            >
              Chuyển theme
            </button>
          </div>
        ) : (
          <div>
            <h2>Chế độ Sáng đang bật</h2>
            <button
              onClick={this.handleThemeSwitch}
              style={{
                backgroundColor: isDarkMode ? hoverStyle.backgroundColor : buttonStyle.backgroundColor,
                color: buttonStyle.color,
                border: buttonStyle.border,
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
            >
              Chuyển theme
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ThemeSwitcher;