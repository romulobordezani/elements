import React from 'react';
import logo from './logo-elem.svg';
import './App.css';
import Button from '../elements/Button';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Elem</h1>
        </header>
        <p className="App-intro">
          <Button content="hola Vespa!" />
        </p>
      </div>);
  }
}

export default App;
