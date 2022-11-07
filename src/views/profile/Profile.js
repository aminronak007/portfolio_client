import React, { useEffect, useState } from "react";
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
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import moment from "moment";

const Profile = () => {
  let token = Cookies.get("admin_access_token");
  const [userDetails, setUserDetails] = useState({});
  const [profileFlag, setProfileFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profileFlag) {
      editProfile(token, userDetails).then((res) => {
        if (res.data) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      });
    } else {
      addProfile(token, userDetails).then((res) => {
        if (res.data) {
          toast.success(res.message);
          setProfileFlag(true);
        } else {
          toast.error(res.message);
          setProfileFlag(false);
        }
      });
    }
  };

  useEffect(() => {
    getProfile(token).then((res) => {
      if (res.data?.email) {
        setUserDetails({
          ...userDetails,
          id: res.data._id,
          email: res.data.email,
          first_name: res.data.firstName,
          birthdate: moment(res.data.birthdate).format("YYYY-MM-DD"),
          last_name: res.data.lastName,
          address: res.data.address.address,
          city: res.data.address.city,
          country: res.data.address.country,
          pincode: res.data.address.pincode,
          aboutme: res.data.aboutMe,
          fullName: res.data.fullName,
        });
        setProfileFlag(true);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <UserHeader userDetails={userDetails} />
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
                    {userDetails?.fullName}
                    <span className="font-weight-light">, 26</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {userDetails?.city}, Gujarat, {userDetails?.country}
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
                            defaultValue={userDetails.first_name}
                            placeholder="First name"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="first_name"
                          />
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
                            defaultValue={userDetails.last_name}
                            placeholder="Last name"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="last_name"
                          />
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
                            defaultValue={userDetails.email}
                            placeholder="Enter your email"
                            type="email"
                            onChange={(e) => handleChange(e)}
                            name="email"
                          />
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
                            defaultValue={userDetails.birthdate}
                            type="date"
                            onChange={(e) => handleChange(e)}
                            name="birthdate"
                          />
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
                            defaultValue={userDetails.address}
                            placeholder="Address"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="address"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={userDetails.city}
                            placeholder="City"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="city"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={userDetails.country}
                            placeholder="Country"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="country"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={userDetails.pincode}
                            placeholder="Postal code"
                            type="number"
                            onChange={(e) => handleChange(e)}
                            name="pincode"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue={userDetails.aboutme}
                        type="textarea"
                        onChange={(e) => handleChange(e)}
                        name="aboutme"
                      />
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
  );
};

export default Profile;
