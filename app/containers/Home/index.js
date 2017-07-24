/**
 * Created by zj on 2017/7/20.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
class Home extends React.Component {
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                Home<Link to="/City">5451211</Link>
            </div>
        )
    }
}
export default Home;