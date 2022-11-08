import Cookies from "js-cookie";

const authActions = {
  LOGIN: "LOGIN",
  ADMINLOGOUT: "ADMINLOGOUT",
  CHECKADMIN: "CHECKADMIN",

  adminLogin: (data) => {
    return {
      type: authActions.LOGIN,
      isLogin: true,
      token: data._token,
    };
  },

  adminLogout: (data) => {
    return {
      type: authActions.ADMINLOGOUT,
      data,
      token: undefined,
    };
  },

  checkAdmin: (data) => {
    return {
      type: authActions.CHECKADMIN,
      token: data?._token ? data._token : Cookies.get("admin_access_token"),
    };
  },
};

export default authActions;
