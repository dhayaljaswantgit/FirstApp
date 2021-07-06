import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  success: null,
  error: null,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.types) {
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
        success: actions.payload,
      };

    case types.LOGIN_START_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: actions.payload,
      };

    default:
      return state;
  }
};
