import React from 'react';
import ReactDOM from  'react-dom';

import { Provider } from 'react-redux';
import App from './App';
import store from "./components/redux/store";


// const initialState = {};
//
// const store = createStore(
//     rootReducer
// );


ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('root')
);

