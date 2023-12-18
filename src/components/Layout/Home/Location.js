import classes from "./Location.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Location = function () {
  const locations = [
    "Kerakodi",
    "Banaswadi",
    "Kormangala",
    "MG Road",
    "JP Nagar",
    "Jayanagar",
    "Vijayanagar",
    "Yahlanka",
    "Yeshwanthpur",
    "Rajajinagar",
  ];
  return (
    <Container fluid style={{ paddingBottom: "40px" }}>
      <Row className={classes.list}>
        {locations.map((location, id) => (
          <Col className={classes.col} key={id}>
            <a className={classes.item} href="#lol">
              {location}
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Location;
