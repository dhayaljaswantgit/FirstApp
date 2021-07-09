import {fork, all} from 'redux-saga/effects';
import loginSaga from './loginSaga';
import listSaga from './listSaga';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(listSaga)]);
}
