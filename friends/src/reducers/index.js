import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
const initialState = {
  friends: [],
  loginPending: false,
  fetchPending: false,
  error: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginPending: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginPending: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginPending: false,
        error: action.payload
      };
    case FETCH_START:
      return {
        ...state,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer