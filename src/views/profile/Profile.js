import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { addProfile, getProfile, editProfile } from "services/auth";
import { toast } from "react-toastify";
import moment from "moment";
import enhancer from "./enhancer/ProfileEnhancer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import AuthActions from "redux/auth/actions";
import LoaderActions from "redux/loader/actions";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";

const { adminLogin } = AuthActions;
const { fetching } = LoaderActions;

const Profile = (props) => {
  const {
    token,
    values,
    setValues,
    errors,
    touched,
    submitCount,
    handleBlur,
    handleChange,
    fetching,
    isLoading,
  } = props;
  const [profileFlag, setProfileFlag] = useState(false);

  const Error = (props) => {
    const field = props.field;
    if ((errors[field] && touched[field]) || submitCount > 0) {
      return <ErrorMsg value={errors[field]} />;
    } else {
      return <span />;
    }
  };

  const handleSubmit = (e) => {
    const { isValid } = props;
    e.preventDefault();
    if (isValid) {
      fetching(true);
      if (profileFlag) {
        setTimeout(() => {
          editProfile(token, values).then((res) => {
            if (res.data) {
              fetching(false);
              toast.success(res.message);
            } else {
              fetching(false);
              toast.error(res.message);
            }
          });
        }, 3000);
      } else {
        setTimeout(() => {
          addProfile(token, values).then((res) => {
            if (res.data) {
              fetching(false);
              toast.success(res.message);
              setProfileFlag(true);
            } else {
              fetching(false);
              toast.error(res.message);
              setProfileFlag(false);
            }
          });
        }, 1000);
      }
    }
  };

  useEffect(() => {
    getProfile(token).then((res) => {
      if (res.data?.email) {
        setValues({
          ...values,
          id: res.data._id,
          email: res.data.email,
          first_name: res.data.firstName,
          last_name: res.data.lastName,
          birthdate: moment(res.data.birthdate).format("YYYY-MM-DD"),
          age: Math.floor(moment().diff(res.data.birthdate, "years", true)),
          address: res.data.address.address,
          city: res.data.address.city,
          state: res.data.address.state,
          country: res.data.address.country,
          pincode: res.data.address.pincode,
          aboutme: res.data.aboutMe,
          fullName: res.data?.fullName,
        });
        setProfileFlag(true);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {isLoading ? null : (
        <>
          <UserHeader values={values} />
          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                <Card className="card-profile shadow">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/profile-cover.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Connect
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Message
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0 pt-md-4">
                    <div className="text-center mt-md-5">
                      <h3>
                        {values?.fullName}
                        <span className="font-weight-light">
                          , {values?.age}
                        </span>
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        {values?.city}, {values?.state}, {values?.country}
                      </div>
                      <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        Full Stack Developer
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">My account</h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.first_name}
                                placeholder="First name"
                                type="text"
                                name="first_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="first_name" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.last_name}
                                placeholder="Last name"
                                type="text"
                                name="last_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="last_name" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.email}
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="email" />
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-birthdate"
                              >
                                Date of Birth
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.birthdate}
                                type="date"
                                name="birthdate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="birthdate" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        Contact information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-address"
                              >
                                Address
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.address}
                                placeholder="Address"
                                type="text"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="address" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-city"
                              >
                                City
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.city}
                                placeholder="City"
                                type="text"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="city" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Postal code
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.pincode}
                                placeholder="Postal code"
                                type="number"
                                name="pincode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="pincode" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-state"
                              >
                                State
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.state}
                                placeholder="State"
                                type="text"
                                name="state"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="state" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Country
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={values.country}
                                placeholder="Country"
                                type="text"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Error field="country" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Description */}
                      <h6 className="heading-small text-muted mb-4">
                        About me
                      </h6>
                      <div className="pl-lg-4">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            className="form-control-alternative"
                            placeholder="A few words about you ..."
                            rows="4"
                            defaultValue={values.aboutme}
                            type="textarea"
                            name="aboutme"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Error field="aboutme" />
                        </FormGroup>
                      </div>
                      <Row className="text-center">
                        <Col>
                          {profileFlag ? (
                            <Button
                              color="default"
                              href="#pablo"
                              onClick={handleSubmit}
                              size="xm"
                            >
                              UPDATE
                            </Button>
                          ) : (
                            <Button
                              className="mr-4"
                              color="info"
                              href="#pablo"
                              onClick={handleSubmit}
                              size="xm"
                            >
                              POST
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
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
)(Profile);
