import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  listData: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LIST_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_LIST_DATA_SUCCESS:
      const listData = action.payload.result;
      listData.data = [...action.payload.oldData, ...listData.data];
      return {
        ...state,
        ...INITIAL_STATE,
        listData,
      };

    case types.GET_LIST_DATA_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      };

    default:
      return state;
  }
};
