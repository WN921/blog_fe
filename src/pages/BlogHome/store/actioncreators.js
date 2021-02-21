import * as constants from './constants';
import { getBlogList } from '../../../api/request';

function changePageContent(data){
    return {
        type: constants.CHANGE_PAGE_CONTENT,
        data: data
    }
}

export function initPage(){
    return async (dispatch, getState) => {
        const state = getState();
        const result = await getBlogList({
            userId: state.BlogHome.userId,
            pageNumber: state.BlogHome.pageNumber,
            pageSize: state.BlogHome.pageSize
        });
        if(result){
            dispatch(changePageContent(result.data));
        }
    }
}
export function changePage(){
    return async (dispatch, getState) => {
        const state = getState();
        const result = await getBlogList({
            userId: state.BlogHome.userId,
            pageNumber: state.BlogHome.pageNumber,
            pageSize: state.BlogHome.pageSize
        });
        if(result){
            dispatch(changePageContent(result.data));
        }
    }
}

export function changePgaeNumber(data){
    return {
        type:constants.CHANGE_PAGE_NUMBER,
        data
    }
}

export function changePageSize(data){
    return {
        type:constants.CHANGE_PAGE_SIZE,
        data
    }
}