import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import App2 from './App2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <hr />
    <h2>Concept of pass data from child to parent</h2>
    <App2  />
    </BrowserRouter>
  </React.StrictMode>
);


