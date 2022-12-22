import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App'
import { store } from './store/store';
import { Provider } from 'react-redux';
const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);




root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  //document.getElementById('root')
)

