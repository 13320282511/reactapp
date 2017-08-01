/**
 * Created by zj on 2017/7/27.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        console.log(222)
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
    componentWillUpdate() {
        console.log(55555)
    }
    componentDidMount() {
        const params = this.props.params
        console.log('category param: ' + params.category)
        console.log('key param:' + params.keyword)
    }
}

export default Search