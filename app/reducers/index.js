/**
 * Created by zj on 2017/7/21.
 */
import { combineReducers } from 'redux'

import userinfo from './userinfo'
import store from './store'

const rootReducer = combineReducers({
    userinfo,
    store
})

export default rootReducer