/**
 * Created by zj on 2017/7/20.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class User extends React.Component {
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                user<br/>
                556ggfg
            </div>
        )
    }
}
export default User;