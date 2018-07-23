import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import { BrowserRouter } from 'react-router-dom'

import './index.css';
import registerServiceWorker from './registerServiceWorker'
import App from './App'
//import AuthOrApp from './authOrApp'
import config from './consts/config'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


ReactDOM.render(
    <BrowserRouter>
        <App />        
    </BrowserRouter>,   
  
document.getElementById('root'));
registerServiceWorker();
