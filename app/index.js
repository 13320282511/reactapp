/**
 * Created by zj on 2017/7/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import RouteMap from './router/routeMap';
// import Hello from './containers/Hello';
import configureStore from './store/configureStore';
import './static/css/common.less'
import './static/css/font.css'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
