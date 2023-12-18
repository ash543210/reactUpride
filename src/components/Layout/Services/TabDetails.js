import ServiceTabImage from "../../Assets/ServiveTabImage.png";
import React from "react";
const TabDetails = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-around mt-5 px-4 mb-5">
        <div
          style={{ width: "40%", height: "40%" }}
          className="align-self-stretch">
          <p
            style={{
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "46px",
            }}>
            Top Rated Driving Schools Nearby
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              marginBottom: "20px",
            }}>
            Discover the convenience of finding highly-rated driving schools
            near you with Upride. Whether you're eager to get your driver's
            license or seeking professional training to sharpen your driving
            skills, Upride simplifies your search. Just click on "near me" in
            our search bar and instantly connect with the best driving schools
            near you.
          </p>
          <a
            style={{
              marginTop: "20px",
              color: "#FD5444",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "26px",
              textDecoration: "none",
            }}
            href="#lol">
            Book Now
          </a>
        </div>
        <div style={{ width: "40%", height: "40%" }}>
          <img
            src={ServiceTabImage}
            style={{ width: "100%", height: "100%" }}
            alt="lol"></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabDetails;
