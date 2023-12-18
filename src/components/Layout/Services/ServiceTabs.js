import Tab from "react-bootstrap/Tab";
import CarWashTab from "./TabsIcons/CarWashTab";
import BookInstructorsTab from "./TabsIcons/BookInstructorsTab";
import DrivingSchoolsTab from "./TabsIcons/DrivingSchoolsTab";
import InternationalLicenseTab from "./TabsIcons/InternationalLicenseTab";
import TabDetails from "./TabDetails";
import TabIcon from "./TabIcon";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { useReducer } from "react";

const reducer = function (state, action) {
  switch (action.type) {
    case "schools": {
      return {
        schools: "true",
        booking: "false",
        international: "false",
        carwash: "false",
      };
    }
    case "booking": {
      return {
        schools: "false",
        booking: "true",
        international: "false",
        carwash: "false",
      };
    }
    case "international": {
      return {
        schools: "false",
        booking: "false",
        international: "true",
        carwash: "false",
      };
    }
    case "carwash": {
      return {
        schools: "false",
        booking: "false",
        international: "false",
        carwash: "true",
      };
    }
    default: {
      return {
        schools: "true",
        booking: "false",
        international: "false",
        carwash: "false",
      };
    }
  }
};

const ServiceTabs = () => {
  const [state, dispatcher] = useReducer(reducer, {
    schools: "true",
    booking: "false",
    international: "false",
    carwash: "false",
  });
  // const changeActive()
  return (
    <div>
      <Tab.Container defaultActiveKey="schools" id="left-tabs-example">
        <Col>
          <Row className="px-5 py-5">
            <Nav variant="underline" className="d-flex justify-content-around">
              <Nav.Item
                onClick={() => {
                  dispatcher({ type: "schools" });
                }}>
                <Nav.Link eventKey="schools">
                  <TabIcon
                    isactive={state["schools"]}
                    title={"Driving Schools"}
                    icon={<DrivingSchoolsTab isactive={state["schools"]} />}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                onClick={() => {
                  dispatcher({ type: "booking" });
                }}>
                <Nav.Link eventKey="booking">
                  <TabIcon
                    isactive={state["booking"]}
                    title={"Book Driving Instructions"}
                    icon={<BookInstructorsTab isactive={state["booking"]} />}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                onClick={() => {
                  dispatcher({ type: "international" });
                }}>
                <Nav.Link eventKey="international">
                  <TabIcon
                    isactive={state["international"]}
                    title={"International Driver’s License Consultation"}
                    icon={
                      <InternationalLicenseTab
                        isactive={state["international"]}
                      />
                    }
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                onClick={() => {
                  dispatcher({ type: "carwash" });
                }}>
                <Nav.Link eventKey="carwash">
                  <TabIcon
                    isactive={state["carwash"]}
                    title={"Car/Bike Wash Near Me"}
                    icon={<CarWashTab isactive={state["carwash"]} />}
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row>
            <Tab.Content>
              <Tab.Pane eventKey="schools">
                <TabDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="booking">
                <TabDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="international">
                <TabDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="carwash">
                <TabDetails />
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Col>
      </Tab.Container>
    </div>
  );
};

export default ServiceTabs;
