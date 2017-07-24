/**
 * Created by zj on 2017/7/20.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
class App extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
        console.log(this.props.children)
    }
    componentDidMount() {
        // 更改状态
        let that = this;
        setTimeout(function(){
            that.setState({
                initDone: true
            })
        },2000)

    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>正在加载...</div>
                }
            </div>
        )
    }
}
// export default App;
module.exports = App;