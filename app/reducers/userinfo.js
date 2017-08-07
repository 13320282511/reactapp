/**
 * Created by zj on 2017/7/21.
 */
import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_LOGIN:
            return action.data

        // 修改城市
        case actionTypes.USERINFO_UPDATE:
            return action.data
        case actionTypes.USERINFO_ADD:
            return action.data

        default:
            return state
    }
}