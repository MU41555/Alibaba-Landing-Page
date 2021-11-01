import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisitNow from './myComponents/header';
import BasicGrid from './myComponents/header_1';

function App() {
  return (
    <div className="App">
      <header className="">
        <VisitNow />
        <BasicGrid />
      </header>
    </div>
  );
}

export default App;
