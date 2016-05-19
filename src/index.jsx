import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import reducer from './reducer';
import LoaferAppContainer from './components/LoaferApp';


const createStoreDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
const store = createStore(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: {
        loaves: [
            {id: 1, title: 'Country White', date: '5/20/2016', status: 'active', open: false},
            {id: 2, title: 'Country Brown', date: '5/21/2016', status: 'active', open: false}
        ],
        filter: 'all'
    }
});

require('./css/index.css');

ReactDOM.render(
    <Provider store={store}>
        <LoaferAppContainer/>
    </Provider>,
    document.getElementById('app')
);