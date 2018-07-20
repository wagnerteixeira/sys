import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import registerServiceWorker from './registerServiceWorker'
import reducers from './config/reducers'
import App from './App'
//import AuthOrApp from './authOrApp'
import config from './consts/config'
console.log(config)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(promise, multi, thunk)
))

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>        
            <App />        
        </Provider>
    </BrowserRouter>,   
  
document.getElementById('root'));
registerServiceWorker();
