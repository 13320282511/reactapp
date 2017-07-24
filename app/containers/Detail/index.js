/**
 * Created by zj on 2017/7/21.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class Detail extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return(
            <div>
                Detail
            </div>
        )
    }
}
export default Detail;