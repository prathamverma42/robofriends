import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import App from './App';

ReactDOM.render(
  <div className="tc">
    <App/>
  </div>  
  ,document.getElementById('root')
);

reportWebVitals();