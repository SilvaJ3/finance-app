import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// Import fontawesome
import  '@fortawesome/fontawesome-free/js/all';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
