/**
 * Created by zj on 2017/7/21.
 */
import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}
export function add(data) {
    return {
        type:actionTypes.USERINFO_ADD,
        data
    }
}