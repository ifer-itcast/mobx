import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import FruitStore from './stores/FruitStore';
ReactDOM.render(<App FruitStore={FruitStore}/>, document.querySelector('#root'));