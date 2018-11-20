import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const characters = [
//     {
//         'name': 'Charlie1111',
//         'job': 'Janitor'
//     },
//     {
//         'name': 'Mac',
//         'job': 'Bouncer'
//     },
//     {
//         'name': 'Dee',
//         'job': 'Aspring actress'
//     },
//     {
//         'name': 'Dennis',
//         'job': 'Bartender'
//     }
// ];

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Table characterData={characters} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
