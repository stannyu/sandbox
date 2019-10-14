import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import store from './store';

ReactDOM.render(<App stories={store.getState()} />, document.getElementById('app'));
