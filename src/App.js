import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <textarea
        readOnly={false}
        maxLength={3}
        spellCheck
        style={{ backgroundColor: 'gray' }}
      />
    </div>
  );
}

export default App;
