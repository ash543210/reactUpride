import Review from "./Review";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const UserReviews = () => {
  const indicatorStyles = {
    background: "#EAE3E3",
    width: "22px",
    borderRadius: "100%",
    height: "22px",
    display: "inline-block",
    margin: "0 8px",
  };
  return (
    <Carousel
      showStatus={false}
      showArrows={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: "#F4777C" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}>
      <div className="d-flex justify-content-between" key={0}>
        <Review />
      </div>
      <div className="d-flex justify-content-between" key={2}>
        <Review />
      </div>
    </Carousel>
  );
};

export default UserReviews;
