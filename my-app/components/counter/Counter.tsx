'use client';

import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { increment, decrement } from '@/redux/actions/counterActions';
import { RootState } from '@/redux/reducers';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
