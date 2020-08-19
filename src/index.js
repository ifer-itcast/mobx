import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FruitStore from './stores/FruitStore';
import { configure } from 'mobx';
configure({ enforceActions: 'observed' });
ReactDOM.render(<App FruitStore={FruitStore}/>, document.querySelector('#root'));