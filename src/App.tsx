import * as React from 'react';
import './App.css';
import Hello from './containers/Hello';
import {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}

export default App;
