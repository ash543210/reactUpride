import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Info from "./Info";
import HomePageImage from "../../Assets/HomepageImage";

const Home = function () {
  return (
    <div className="d-sm-flex flex-sm-column flex-md-row justify-content-around px-5">
      <div
        style={{ padding: "40px 0px" }}
        className="align-self-stretch d-flex flex-column justify-content-evenly w-50">
        <Info />
        <SearchBar />
        <div style={{ paddingTop: "40px" }}>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button
                style={{
                  backgroundColor: "#FD5444",
                  fontFamily: "Roboto Flex",
                  padding: "10px 30px",
                }}>
                BOOK DRIVING SCHOOL
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontFamily: "Roboto Flex",
                  padding: "10px 30px",
                }}>
                HIRE INSTRUCTORS
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>

      <div className="d-md-flex jusitify-content-md-center align-self-stretch w-50">
        <HomePageImage />
      </div>
    </div>
  );
};

export default Home;
