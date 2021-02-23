import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import App from './App';
import CardList from './CardList';
import {robots} from './robots';
import Card from './Card';
import SearchBox from './SearchBox';

ReactDOM.render(
  <div className="tc">
    <h1>Robo friends</h1>
    <SearchBox/>
    <App/>
  </div>  
  ,document.getElementById('root')
);

reportWebVitals();