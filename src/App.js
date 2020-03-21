import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocketComponent from './components/SocketComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SocketComponent/>
      </header>
    </div>
  );
}

export default App;
