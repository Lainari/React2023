import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.createRoot(document.querySelector('#root')).render(
    <>
      <App />
    </>
);