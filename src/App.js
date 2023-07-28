import { useState } from 'react';
import AnimalShow from './AnimalShow';

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      {renderedAnimals}
    </div>
  );
}

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

export default App;
