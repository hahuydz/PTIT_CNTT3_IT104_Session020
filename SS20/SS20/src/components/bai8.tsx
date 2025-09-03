import React, { useReducer } from 'react';

interface State {
  name: string;
  email: string;
  submitted: boolean;
}

type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_EMAIL'; payload: string }
  | { type: 'SUBMIT' };

const initialState: State = {
  name: '',
  email: '',
  submitted: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'SUBMIT':
      return { ...state, submitted: true };
    default:
      return state;
  }
}


export default function Ex8() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });
  };

  return (
    <div>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'UPDATE_NAME', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value })}
          />
        </div>
      </form>
      {state.submitted && (
        <div style={{ backgroundColor: '#f5f5f5', padding: '10px', marginTop: '10px' }}>
          <h3>Thông tin người dùng:</h3>
          <p>Tên: {state.name}</p>
          <p>Email: {state.email}</p>
        </div>
      )}
    </div>
  );
}