// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApplicantProvider } from './components/ApplicantContext';

ReactDOM.render(
  <ApplicantProvider>
    <App />
  </ApplicantProvider>,
  document.getElementById('root')
);
