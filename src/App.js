import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './BaseContainers/Navbar/NavbarContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
