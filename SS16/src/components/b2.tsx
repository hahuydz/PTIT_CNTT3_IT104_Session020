import React, { Component } from 'react';

interface LoginState {
  isLoggedin: boolean;
  user: string;
}

class Login extends Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedin: false,
      user: 'User',
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isLoggedin: !prevState.isLoggedin,
    }));
  };

  render() {
    const { isLoggedin, user } = this.state;

    return (
      <div>
        {!isLoggedin ? (
          <div>
            <h2>Vui lòng đăng nhập để tiếp tục.</h2>
            <button onClick={this.handleToggle}>Đăng nhập</button>
          </div>
        ) : (
          <div>
            <h2>Xin chào, {user}!</h2>
            <button onClick={this.handleToggle}>Đăng xuất</button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;