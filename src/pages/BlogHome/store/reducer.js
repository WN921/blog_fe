import { produce } from 'immer';
import * as constants from './constants';

const deState = {
    userId: 1,
    pageNumber: 1,
    pageSize: 10,
    BlogList: []
}

const reducer = produce((draft, action) => {
    switch (action.type){
        case constants.CHANGE_PAGE_CONTENT:
            draft.BlogList = action.data;
            return;
        case constants.CHANGE_PAGE_NUMBER:
            draft.pageNumber = action.data;
            return;
        case constants.CHANGE_PAGE_SIZE:
            draft.pageSize = action.data;
            return;
        default:
    }
}, deState)

export default reducer;