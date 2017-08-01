/**
 * Created by zj on 2017/8/1.
 */
import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    return result
}