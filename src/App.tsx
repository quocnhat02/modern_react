import React from 'react';
import logo from './logo.svg';
import './App.css';

function Heading({ text }: { text: string }) {
  return <h1>{text}</h1>;
}

function App() {
  return (
    <div className='App'>
      <Heading text='Hello World' />
    </div>
  );
}

export default App;
