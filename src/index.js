import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import App from './App';
import CardList from './CardList';
import {robots} from './robots';
import Card from './Card';

ReactDOM.render(  
  <App/>
  // <Card
  //                           name={robots[1].name} 
  //                           id={robots[1].id} 
  //                           email={robots[1].email}
  //                       />
  // <h1>Hello</h1>
  ,document.getElementById('root')
);

reportWebVitals();