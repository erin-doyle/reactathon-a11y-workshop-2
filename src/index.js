import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


// if we're in dev mode
if (process.env.NODE_ENV === 'development') {
    // Set up react-axe to catch accessibility issues during development
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app-root'));

registerServiceWorker();
