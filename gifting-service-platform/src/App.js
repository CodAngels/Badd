import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'; // Correct the import statement

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Home /> {/* Include the Home component */}
      </main>
    </div>
  );
}

export default App;
