import { produce } from 'immer';
import * as constants from './constants';

const deState = {
    BlogInfo: {}
}

const reducer = produce((draft, action) => {
    switch (action.type){
        case constants.INIT_PAGE:
            draft.BlogInfo = action.data;
            return;
        default:
    }
}, deState)

export default reducer;