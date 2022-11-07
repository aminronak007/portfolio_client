import { useLocation } from "react-router-dom";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  let url = useLocation();
  let pathname = url?.pathname;

  let footer = {
    position: "fixed",
    left: 280,
    bottom: 10,
    right: 30,
    background: "transparent",
  };
  return (
    <footer className="footer">
      <Row
        style={pathname === "/admin/dashboard" ? footer : null}
        className="align-items-center justify-content-xl-between"
      >
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ronak Amin
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://blog.creative-tim.com?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
