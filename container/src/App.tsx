import React from 'react';
import './App.css';
import Pokemons from './external-components/Pokemons';
import Header from './components/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Pokemons />
        </div>
      </div>
    );
  }
}

export default App;
