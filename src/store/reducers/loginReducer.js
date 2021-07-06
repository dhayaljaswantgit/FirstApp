import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  success: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };

    case types.LOGIN_START_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        success: action.payload,
      };

    case types.LOGIN_START_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      };

    default:
      return state;
  }
};
