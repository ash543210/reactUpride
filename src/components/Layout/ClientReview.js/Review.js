import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <React.Fragment>
      <ReviewCard
        review={
          "At in pellentesque integer netus enim purus. Tempor nulla porta pretium venenatis sem tellus duis. Rhoncus eu le"
        }
        user={"narendra gates"}
      />
      <ReviewCard
        review={
          "Eu lorem lobortis malesuada suspendisse volutpat viverra penatibus vulputate sit. Morbi et malesuada ipsum etiam in vitae. "
        }
        user={"silvia putriani"}
      />
      <ReviewCard
        review={
          "Vel egestas cursus mauris urna sed dui egestas quis aliquet. Nulla dictumst vel iaculis at. Justo purus id arcu vitae."
        }
        user={"wulan anggraeni"}
      />
    </React.Fragment>
  );
};

export default Review;
