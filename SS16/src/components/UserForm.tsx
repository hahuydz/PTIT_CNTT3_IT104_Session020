import React, { Component } from 'react';

interface UserFormState {
  name: string;
  email: string;
  age: string;
  error: string;
}

class UserForm extends Component<{}, UserFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      error: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'age' && parseInt(value) < 0) {
      this.setState({ error: 'Tuổi không được âm' });
    } else {
      this.setState({ [name]: value } as Pick<UserFormState, keyof UserFormState>, () => {
        if (name === 'age' && this.state.error === 'Tuổi không được âm') {
          this.setState({ error: '' });
        }
      });
    }
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, age } = this.state;
    if (!email.includes('@')) {
      this.setState({ error: 'Email không hợp lệ' });
    } else if (parseInt(age) < 0) {
      this.setState({ error: 'Tuổi không được âm' });
    } else {
      this.setState({ error: '' });
      console.log('Thông tin nhập:', this.state);
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      age: '',
      error: '',
    });
  };

  render() {
    const { name, email, age, error } = this.state;

    return (
      <div>
        <h2>Nhập thông tin người dùng</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Họ tên"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.handleChange}
              placeholder="Tuổi"
            />
          </div>
          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleReset}>
            Xóa tất cả
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!error && name && email && age && (
          <div>
            <h3>Thông tin nhập:</h3>
            <p>Họ tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserForm;