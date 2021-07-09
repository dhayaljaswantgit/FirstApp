import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import loaderReducer from './loaderReducer';
import toastReducer from './toastReducer';
import listReducer from './listReducer';

export default combineReducers({
  loginReducer,
  loaderReducer,
  toastReducer,
  listReducer,
});
