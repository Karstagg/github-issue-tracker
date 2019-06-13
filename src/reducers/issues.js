import {
  SET_ISSUES
} from '../actions/issue';

const initialState = {
  issues: null
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case SET_ISSUES:
      return Object.assign({}, state, {
        issues: action.issues
      });
    default:
      return state
  }

}
