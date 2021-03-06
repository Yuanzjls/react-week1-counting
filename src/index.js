import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Set max capacity as 100
ReactDOM.render(
  <React.StrictMode>
    <App maxCapacity={100} />  
  </React.StrictMode>,
  document.getElementById('root')
);
