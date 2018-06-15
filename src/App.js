import React, { Component } from 'react';

import './App.css';
// import ItemList from './components/ItemList';
import ItemList from './components/ItemList2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList/>
      </div>
    );
  }
}

export default App;
