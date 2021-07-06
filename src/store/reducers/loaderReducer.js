import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case types.LOADER_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOADER_STOP:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
