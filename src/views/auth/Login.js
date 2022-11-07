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
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { login } from "services/auth";
import Cookies from "js-cookie";

const Login = () => {
  let history = useHistory();
  let token = Cookies.get("admin_access_token");

  const [user, setUser] = useState({});

  useEffect(() => {
    if (token) {
      history.push("/admin/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSignIn = () => {
    login(user).then((res) => {
      if (res.data?.user) {
        toast.success(res.message);
        history.push("/admin/dashboard");
      } else {
        toast.error(res.error);
      }
    });
  };

  return (
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
                  onChange={(e) => handleChange(e)}
                />
              </InputGroup>
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
                  onChange={(e) => handleChange(e)}
                />
              </InputGroup>
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
  );
};

export default Login;
