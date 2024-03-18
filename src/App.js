import React from 'react';
import './App.css';
import Research from './components/Research';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mode from './context/Mode.js'

function App() {
  return (
    <Mode>
      <div>
        <Navbar/>
        <Research/>
      </div>
    </Mode>
    
  );
}

export default App;
