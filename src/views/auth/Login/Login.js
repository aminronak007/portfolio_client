import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { login } from "services/auth";
import enhancer from "./enhancer/LoginEnhancer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import AuthActions from "redux/auth/actions";
import LoaderActions from "redux/loader/actions";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";
import { Fragment } from "react";

const { adminLogin } = AuthActions;
const { fetching } = LoaderActions;

const Login = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    history,
    touched,
    submitCount,
    token,
    fetching,
    isLoading,
  } = props;

  useEffect(() => {
    if (token) {
      history.push("/admin/dashboard");
    }
    // eslint-disable-next-line
  });

  const Error = (props) => {
    const field = props.field;
    if ((errors[field] && touched[field]) || submitCount > 0) {
      return <ErrorMsg value={errors[field]} />;
    } else {
      return <span />;
    }
  };

  const handleSignIn = (e) => {
    let { values, isValid, handleSubmit } = props;
    e.preventDefault();
    handleSubmit();
    if (isValid) {
      fetching(true);
      setTimeout(() => {
        login(values).then(async (res) => {
          if (res.data?.user) {
            fetching(false);
            await adminLogin(res);
            toast.success(res.message);
            history.push("/admin/dashboard");
          } else {
            fetching(false);
            toast.error(res.error);
          }
        });
      }, 1000);
    }
  };

  return (
    <Fragment>
      {isLoading ? null : (
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with Admin Credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </InputGroup>
                  <Error field="email" />
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </InputGroup>
                  <Error field="password" />
                </FormGroup>
                <div className="text-center">
                  <Button
                    onClick={handleSignIn}
                    className="my-4"
                    color="primary"
                    type="button"
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth?.token,
    isLoading: state.loader.isLoading,
  };
};

export default compose(
  withRouter,
  enhancer,
  connect(mapStateToProps, { adminLogin, fetching })
)(Login);
