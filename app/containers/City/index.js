/**
 * Created by zj on 2017/7/20.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class City extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                city444444444444444444444444444444444444444444
            </div>
        )
    }
}
// export default City;
module.exports = City;