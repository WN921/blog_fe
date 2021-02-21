import { combineReducers } from 'redux';
import { reducer as BlogHomeReducer } from '../pages/BlogHome/store';
import { reducer as BlogPageReducer } from '../pages/BlogPage/store';

const reducer = combineReducers({
    BlogHome: BlogHomeReducer,
    BlogPage: BlogPageReducer
})
export default reducer;