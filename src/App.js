import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LOADER from "./helpers/CssHelper";
import { HashLoader } from "react-spinners";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, useLocation } from "react-router-dom";
import { Fragment } from "react";
import AuthActions from "redux/auth/actions";
import { useEffect } from "react";
import LoaderActions from "redux/loader/actions";

const { checkAdmin } = AuthActions;
const { fetching } = LoaderActions;

const App = (props) => {
  const { token, history, isLoading, checkAdmin } = props;
  let path = useLocation();

  useEffect(() => {
    checkAdmin();
    if (!token) {
      history.push("/auth/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

        <Redirect from="/" to="/auth/login" />
      </Switch>
      <ToastContainer />
      {isLoading ? (
        <HashLoader
          color={path.pathname === "/auth/login" ? "#ffffff" : "#000000"}
          cssOverride={
            path.pathname === "/auth/login" ? LOADER.two : LOADER.one
          }
          loading={isLoading}
          size={50}
        />
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth?.token,
    isLoading: state.loader.isLoading,
    checkAdmin: state.auth?.checkAdmin,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { checkAdmin, fetching })
)(App);
