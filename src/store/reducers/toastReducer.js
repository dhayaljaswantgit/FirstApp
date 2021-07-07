import { TOAST_TYPE } from "../../utils/constants";
import * as types from "../actionTypes";

const INITIAL_STATE = {
  showing: false,
  message: "",
  type: TOAST_TYPE.NORMAL,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_TOAST:
      return {
        ...state,
        showing: true,
        message: action.payload.message,
        type: action.payload.type || TOAST_TYPE.NORMAL,
      };
    case types.HIDE_TOAST:
      return {
        ...state,
        showing: false,
      };

    default:
      return state;
  }
};
