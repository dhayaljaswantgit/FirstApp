import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

export default function* loginSaga() {
  yield takeLatest(types.LOGIN_START, login);
}

function* login(action) {
  try {
    const result = yield axios.post(
      'https://reqres.in/api/login',
      action.payload,
    );
    console.log('Saga result => ', result);

    yield put({
      type: types.LOGIN_START_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.log('Saga error => ', error);
    yield put({
      type: types.LOGIN_START_FAIL,
      payload: error,
    });
  }
}
