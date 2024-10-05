import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: any global CSS styles
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import reportWebVitals from './reportWebVitals'; // Optional for measuring performance

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals(); // Optional, for performance monitoring
