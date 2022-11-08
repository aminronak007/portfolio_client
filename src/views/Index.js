import { Container, Row, Col } from "reactstrap";
import Header from "components/Headers/Header.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import AuthActions from "redux/auth/actions";
import { useEffect } from "react";

const { checkAdmin } = AuthActions;

const Index = (props) => {
  const { checkAdmin, token } = props;
  useEffect(() => {
    checkAdmin({ _token: token });
  });
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            {/* <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    {profile ? (
                      <h3 className="mb-0">Profile</h3>
                    ) : portfolio ? (
                      <h3 className="mb-0">Portfolios</h3>
                    ) : education ? (
                      <h3 className="mb-0">Education</h3>
                    ) : experience ? (
                      <h3 className="mb-0">Experience</h3>
                    ) : null}
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </>
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
  connect(mapStateToProps, { checkAdmin })
)(Index);
