import React from 'react';
import './App.css';
import MyNavBar from './navBar.js'

//<Main />
function App() {
  return (
    <div className="App">
      <MyNavBar />
      <header className="App-header">
        <img src="LcDelivery.png" className="App-logo" alt="logo" />
        <h2>Welcome to our sick time management</h2>
      </header>
    </div>
  );
}

export default App;
