import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './components/App';
import reportWebVitals from '../src/components/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
