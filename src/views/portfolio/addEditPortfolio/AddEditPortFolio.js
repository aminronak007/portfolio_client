import React, { Fragment } from "react";
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

const AddEditPortFolio = () => {
  return (
    <Fragment>
      {/* {isLoading ? null : ( */}
      <>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Add New Portfolio</h3>
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
                              // defaultValue={values.first_name}
                              placeholder="First name"
                              type="text"
                              name="first_name"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="first_name" /> */}
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
                              // defaultValue={values.last_name}
                              placeholder="Last name"
                              type="text"
                              name="last_name"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="last_name" /> */}
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
                              // defaultValue={values.email}
                              placeholder="Enter your email"
                              type="email"
                              name="email"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="email" /> */}
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
                              // defaultValue={values.birthdate}
                              type="date"
                              name="birthdate"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="birthdate" /> */}
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
                              // defaultValue={values.address}
                              placeholder="Address"
                              type="text"
                              name="address"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="address" /> */}
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
                              // defaultValue={values.city}
                              placeholder="City"
                              type="text"
                              name="city"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="city" /> */}
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
                              // defaultValue={values.pincode}
                              placeholder="Postal code"
                              type="number"
                              name="pincode"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="pincode" /> */}
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
                              // defaultValue={values.state}
                              placeholder="State"
                              type="text"
                              name="state"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="state" /> */}
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
                              // defaultValue={values.country}
                              placeholder="Country"
                              type="text"
                              name="country"
                              // onChange={handleChange}
                              // onBlur={handleBlur}
                            />
                            {/* <Error field="country" /> */}
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
                          // defaultValue={values.aboutme}
                          type="textarea"
                          name="aboutme"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                        />
                        {/* <Error field="aboutme" /> */}
                      </FormGroup>
                    </div>
                    <Row className="text-center">
                      <Col>
                        {/* {profileFlag ? (
                          <Button
                            color="default"
                            //   onClick={handleSubmit}
                            size="xm"
                          >
                            UPDATE
                          </Button>
                        ) : (
                          <Button
                            className="mr-4"
                            color="info"
                            //   onClick={handleSubmit}
                            size="xm"
                          >
                            POST
                          </Button>
                        )} */}

                        <Button
                          className="mr-4"
                          color="info"
                          //   onClick={handleSubmit}
                          size="xm"
                        >
                          POST
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
      {/* )} */}
    </Fragment>
  );
};

export default AddEditPortFolio;
