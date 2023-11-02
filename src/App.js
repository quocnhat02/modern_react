import './App.css';
import { useState } from 'react';
import Items from './Items';

function App() {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState(1);

  function add() {
    const name = 'Item ' + key;
    setKey(key + 1);
    items.push({ name, key });
    setItems([...items]);
  }

  return (
    <>
      <button onClick={add}>Add Item</button>
      <Items items={items} setItems={setItems} />
    </>
  );
}

export default App;
