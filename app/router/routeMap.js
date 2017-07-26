/**
 * Created by zj on 2017/7/20.
 */
import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import App from '../containers';
import Home from '../containers/Home';
import City from '../containers/City/index.js';
import User from '../containers/User';
import Detail from '../containers/Detail';

class RouteMap extends React.Component {
    constructor(props) {
        super(props);
    }
    updateHandle() {
        console.log('binhua');
    }
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/Detail' componet={Detail}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap;