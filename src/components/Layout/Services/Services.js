import Mission from "./Mission";
import ServiceInfo from "./ServiceInfo";
import ServiceTabs from "./ServiceTabs";

const Services = function () {
  return (
    <div className="d-flex justify-content-center mb-5">
      <div
        style={{ marginTop: "50px" }}
        className="d-flex flex-column justify-content-around">
        <Mission />
        <ServiceInfo />
        <div
          style={{
            width: "70%",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          className="align-self-center">
          <ServiceTabs />
        </div>
      </div>
    </div>
  );
};

export default Services;
