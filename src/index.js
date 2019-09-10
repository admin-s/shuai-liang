import React from 'react';
import ReactDOM from 'react-dom';
import Wrouter from './router';
import * as serviceWorker from './serviceWorker';
import axios from './utils/axios';

React.Component.prototype.$axios=axios
ReactDOM.render(<Wrouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
