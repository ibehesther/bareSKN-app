import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './css/styles.css';
import './css/styles-tablet.css';
import './css/styles-desktop.css';
import './css/animation.css';
import { store } from './redux/store.js'
import { Provider } from "react-redux"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
