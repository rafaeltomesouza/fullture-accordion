import React from 'react';
import { Accordion } from './component/Accordion';
import { listActitvies } from './mock';

function App() {
  return (
    <div className="App">
        <Accordion listActitvies={listActitvies} />
    </div>
  );
}

export default App;
