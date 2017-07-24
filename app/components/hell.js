/**
 * Created by zj on 2017/7/20.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
class Hello extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return <div>
            <h1>
                woshihehehheh
            </h1>
        </div>
    }
}
export default Hello;