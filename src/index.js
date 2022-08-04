import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './css/styles.css';
import './css/styles-tablet.css';
import './css/styles-desktop.css';
import './css/animation.css';
import App from "./App";

fetch('http://127.0.0.1:8080/api/v1.0')
.then(res => res.json())
.then(console.log('working'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter 
    basename={'/bareSKN-app'}
    >
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
