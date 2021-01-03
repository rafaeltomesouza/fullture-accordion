import React from 'react';
import { Accordion } from './component';
import { listActitvies } from './mock';
import { DesktopStyle } from './component/styles/styles.web';

function App() {  
  return (
    <div className="App">
        <Accordion listActitvies={listActitvies} style={DesktopStyle()} platform="web"/>
    </div>
  );
}

export default App;
