// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
// import './index.css'; // Import your styles if needed
import { GoogleOAuthProvider } from '@react-oauth/google'; //

ReactDOM.render(
  // <GoogleOAuthProvider> 
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </GoogleOAuthProvider>, //
  document.getElementById('root')
);