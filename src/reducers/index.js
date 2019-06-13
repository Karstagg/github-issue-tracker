import {combineReducers} from 'redux';


const combinedReducer = combineReducers({
  //sub reducers go here
  issues
});

export const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer