import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mechan from './Mechan';
import Lista from './Lista';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  <Mechan/>
  <Lista/>
  </React.StrictMode>
);
