import React from 'react';
import './App.css';
import MyNavBar from './navBar.js'
import ReactDOM from 'react-dom';

function Stats() {
    return (
      <div className="App">
        <MyNavBar />
        <header className="App-header">
          <img src="LcDelivery.png" className="App-logo" alt="logo" />
          <h2>Coming Soon!</h2>
        </header>
      </div>
    );
  }

  function displayStats(target){
    ReactDOM.render(<Stats />, document.getElementById('root'));
  }

  export default displayStats;