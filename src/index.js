import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';
import App from './App';
import rootReducer from './reducers'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import apiMiddleware from "./middleware/api";

const store = createStore(rootReducer, applyMiddleware(apiMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
