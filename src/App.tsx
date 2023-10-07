import { useState } from 'react';
import './App.css';

function Heading({ text, color }: { text: string; color: string }) {
  return <h1 style={{ color: color }}>{text}</h1>;
}

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Nhat' },
    { id: 2, name: 'Thuong' },
    { id: 3, name: 'Duong' },
  ]);

  const clickHandler = () => {
    console.log('I am clicked');
    setUsers([]);
  };

  return (
    <div>
      <Heading text='Hello World' color='green' />
      <Heading text='My name is LightCodeSE' color='blue' />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
