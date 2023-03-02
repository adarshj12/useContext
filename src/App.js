import React, { createContext } from 'react';
import './App.css';
import ComponentA from './ComponentA';

const FirstName = createContext();
const LastName = createContext()
function App() {
  return (
    <div className="App">
      <FirstName.Provider value={'adarsh'} >
        <LastName.Provider value={'jayadevan'}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>

    </div>
  );
}

export default App;
export {FirstName,LastName}

