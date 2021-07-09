import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/api';
import {TOAST_TYPE} from '../../utils/constants';

export default function* listSaga() {
  yield takeLatest(types.GET_LIST_DATA_START, list);
}

function* list(action) {
  if (!action.payload.data.length)
    yield put({
      type: types.LOADER_START,
    });

  try {
    const result = yield new API().call({
      apiEndPoints: `users?page=${action.payload.pageNo}`,
    });

    yield put({
      type: types.GET_LIST_DATA_SUCCESS,
      payload: {
        oldData: action.payload.data,
        result: result.data,
      },
    });
    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.SHOW_TOAST,
      payload: {
        message: error.message,
        type: TOAST_TYPE.ERROR,
      },
    });

    yield put({
      type: types.GET_LIST_DATA_FAIL,
      payload: error,
    });
    yield put({
      type: types.LOADER_STOP,
    });
  }
}
