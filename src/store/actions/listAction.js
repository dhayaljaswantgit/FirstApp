import * as types from '../actionTypes';

export const getList = payload => ({
  type: types.GET_LIST_DATA_START,
  payload,
});
