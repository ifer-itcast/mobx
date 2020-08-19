import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import stores from './stores';
import { configure } from 'mobx';
configure({ enforceActions: 'observed' });
ReactDOM.render(<App {...stores}/>, document.querySelector('#root'));