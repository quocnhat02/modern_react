import { useState } from 'react';

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      <div>{animals}</div>
    </div>
  );
}

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

export default App;
