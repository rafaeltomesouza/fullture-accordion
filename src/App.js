import React from 'react';
import { Accordion } from './Accordion';
import { listActitvies } from './mock';

function App() {
  return (
    <div className="App">
        <Accordion listActitvies={listActitvies} />
    </div>
  );
}

export default App;
