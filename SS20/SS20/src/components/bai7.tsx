import React, { useReducer } from 'react';

interface State {
  count: number;
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Ex7() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Số đếm: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Tăng</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Giảm</button>
    </div>
  );
}