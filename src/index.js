import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header.jsx";
import FirstDiv from "./FirstDiv.jsx";
import App from './App';
import Skills from './Skills';
import Work from './Work';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
  <Header/>
  <FirstDiv/>
  <Skills/>
  <Work/>
    <App />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
