/**
 * Created by zj on 2017/7/21.
 */
import React from 'react'

class B extends React.Component {
    render() {
        return (
            <p>{this.props.userinfo.city}</p>
        )
    }
}

export default B