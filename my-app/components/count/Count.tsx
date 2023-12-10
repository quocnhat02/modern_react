'use client';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { decrement, increment } from '@/lib/features/counter/counterSlice';
import React from 'react';

const Count = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <br />
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
};

export default Count;
