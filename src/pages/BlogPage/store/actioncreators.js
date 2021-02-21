import * as constants from './constants';
import { getBlog } from '../../../api/request';

function initBlogPage(data){
    return {
        type: constants.INIT_PAGE,
        data: data
    }
}

export function initPage(id){
    return async (dispatch) => {
        const result = await getBlog(id);
        if(result){
            dispatch(initBlogPage(result.data));
        }
    }
}