import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router/routeMap';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux'

import configureStore from './store/configureStore';

import './static/css/common.less';
import './static/css/font.css';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById("root"));