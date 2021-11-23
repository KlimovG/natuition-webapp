import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// add fonts
import './fonts/HindMadurai-Light.woff'
import './fonts/HindMadurai-Light.woff2'
import './fonts/HindMadurai-Medium.woff'
import './fonts/HindMadurai-Medium.woff2'
import './fonts/HindMadurai-Regular.woff'
import './fonts/HindMadurai-Regular.woff2'
import './fonts/Montserrat-Regular.woff'
import './fonts/Montserrat-Regular.woff2'
import './fonts/Montserrat-Bold.woff'
import './fonts/Montserrat-Bold.woff2'
import './fonts/Montserrat-Medium.woff'
import './fonts/Montserrat-Medium.woff2'
import './fonts/Montserrat-Regular.woff'
import './fonts/Montserrat-Regular.woff2'
import './fonts/Montserrat-SemiBold.woff'
import './fonts/Montserrat-SemiBold.woff2'



import {
  BrowserRouter as Router
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>

      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

