import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/api';
import {TOAST_TYPE} from '../../utils/constants';

export default function* loginSaga() {
  yield takeLatest(types.LOGIN_START, login);
}

function* login(action) {
  yield put({
    type: types.LOADER_START,
  });

  try {
    const result = yield new API().call({
      apiEndPoints: 'login',
      type: 'post',
      params: action.payload,
    });

    yield put({
      type: types.SHOW_TOAST,
      payload: {
        message: 'Login Success',
        type: TOAST_TYPE.SUCCESS,
      },
    });

    yield put({
      type: types.LOGIN_START_SUCCESS,
      payload: result.data,
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
      type: types.LOGIN_START_FAIL,
      payload: error,
    });
    yield put({
      type: types.LOADER_STOP,
    });
  }
}
