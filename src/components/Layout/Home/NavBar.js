import logo from "../../Assets/image.png";
import dial from "../../Assets/phone.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = function () {
  const contact = " Contact us : +91 9211420786";
  return (
    <Container fluid style={{ padding: "0 0" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="mt-1 ms-auto">
          <img
            src={dial}
            width="12"
            height="15"
            className="d-inline-block align-top mt-1"
            alt="React Bootstrap logo"
          />
          <pre className="my-0 d-inline">{contact}</pre>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ms-auto">
            <div className="ms-auto mt-1">
              <Nav.Link className="d-inline" href="#home">
                Download App
              </Nav.Link>
              <Nav.Link className="d-inline" href="#link">
                Are you a Driving School?
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
