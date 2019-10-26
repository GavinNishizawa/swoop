import React from 'react';
import logo from './logo.svg';
import './App.css';
import { make as TestComponent } from './TestComponent.bs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <canvas/>
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
