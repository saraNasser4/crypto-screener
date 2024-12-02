import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStatesProvider from './context/GlobalStates'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStatesProvider>
      <Router>
        <App />
      </Router>
    </GlobalStatesProvider>
  </React.StrictMode>
);

