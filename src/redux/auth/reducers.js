import authAction from "./actions";
import Cookies from "js-cookie";

const initState = {
  isLogin: localStorage.getItem("isLogin")
    ? localStorage.getItem("isLogin") === "true"
    : false,
  token: Cookies.get("admin_access_token")
    ? Cookies.get("admin_access_token")
    : null,
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case authAction.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.token,
      };

    case authAction.ADMINLOGOUT:
      return {
        ...state,
        data: action.data,
        token: action.token,
      };

    case authAction.CHECKADMIN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
}
