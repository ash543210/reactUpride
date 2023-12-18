import React from "react";
import "./App.css";
import NavBar from "./components/Layout/Home/NavBar";
import Location from "./components/Layout/Home/Location";
import Home from "./components/Layout/Home/Home";
import Container from "react-bootstrap/Container";
import Services from "./components/Layout/Services/Services";
import Statistics from "./components/Layout/Statistics/Statistics";
import DrivingSchools from "./components/Layout/Driving Schools/DrivingSchools";
import Offers from "./components/Layout/Offer/Offers";
import PersonalisedPrograms from "./components/Layout/Personalised Programs/PersonalisedPrograms";
import Programs from "./components/Layout/Personalised Programs/Programs";
import LicenseTestVideo from "./components/Layout/Personalised Programs/LicenseTestVideo";
import ClientReviews from "./components/Layout/ClientReview.js/ClientReviews";

function App() {
  // const myStyle = { width: "100%", height: "100%" };
  return (
    <Container
      className="text-bg-light d-flex flex-column justify-content-center"
      fluid
      style={{ padding: "0 0" }}>
      <NavBar />
      <Location />
      <Home />
      <Services />
      <Statistics />
      <DrivingSchools />
      <Offers />
      <PersonalisedPrograms />
      <Programs />
      <LicenseTestVideo />
      <ClientReviews />
    </Container>
  );
}

export default App;
