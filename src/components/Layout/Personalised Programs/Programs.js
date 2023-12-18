import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import TabDetails from "./TabDetails";

const Programs = () => {
  return (
    <Tab.Container
      style={{ paddingRight: "10px" }}
      defaultActiveKey="all"
      id="tab-programs">
      <Col style={{ width: "90%" }} className="align-self-center mb-5">
        <Row className="px-5 py-5">
          <Nav
            variant="underline"
            className="d-flex"
            style={{
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "33px",
              color: "black",
            }}>
            <Nav.Item style={{ padding: "0px 50px" }}>
              <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ paddingRight: "50px" }}>
              <Nav.Link eventKey="training">Training</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ paddingRight: "50px" }}>
              <Nav.Link eventKey="rto">RTO & Rules</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row className="px-5 py-5">
          <Tab.Content>
            <Tab.Pane eventKey="all">
              <TabDetails />
            </Tab.Pane>
            <Tab.Pane eventKey="training">
              <TabDetails />
            </Tab.Pane>
            <Tab.Pane eventKey="rto">
              <TabDetails />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Col>
    </Tab.Container>
  );
};

export default Programs;
