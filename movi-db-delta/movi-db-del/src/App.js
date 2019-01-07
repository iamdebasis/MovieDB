import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMovi from './comp/AddMovi'

class App extends Component {
  render() {
    return (
      <div className="outline">
        <AddMovi/>
    
      </div>
    );
  }
}

export default App;
