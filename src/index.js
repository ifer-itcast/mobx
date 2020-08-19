import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import stores from './stores';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
configure({ enforceActions: 'observed' });

ReactDOM.render(<Provider {...stores}>
    <App/>
</Provider>, document.querySelector('#root'));