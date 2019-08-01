import React from 'react';
import { backgroundImage } from '../../config.json';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url('${window.location.origin}/${backgroundImage}')`}}>
      
    </div>
  );
}

export default App;
