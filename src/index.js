import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore(); // You can also pass in an initialState here

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
