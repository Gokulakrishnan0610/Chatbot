import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContexProvider } from './service/ServiceProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContexProvider>
      <App />
    </ContexProvider>
  </React.StrictMode>
);


reportWebVitals();
