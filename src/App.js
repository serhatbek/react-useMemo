import { useState } from 'react';
import Header from './components/Header/Header';

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className='App'>
      <Header />
      <div>
        <h1>{number}</h1>
        <div>
          <button onClick={() => setNumber(number + 1)}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default App;
