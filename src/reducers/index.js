import {combineReducers} from 'redux';
import issues from '../reducers/issues';

const combinedReducer = combineReducers({
  //sub reducers go here
  issues
});

export const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer