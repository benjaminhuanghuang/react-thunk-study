import React, { Component } from 'react';
// Redux
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import ItemList from './components/ItemList3';

const store = configureStore(); // You can also pass in an initialState here

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ItemList />
        </Provider>
      </div>
    );
  }
}

export default App;
