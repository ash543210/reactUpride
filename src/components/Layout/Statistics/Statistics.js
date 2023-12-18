import StatisticsInfo from "./StatisticsInfo";

const Statistics = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div
        style={{ width: "84%" }}
        className="d-flex flex-column justify-content-around">
        <div
          style={{
            width: "73%",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: "46px",
            textAlign: "center",
          }}
          className="align-self-center mb-4 mt-5">
          <p>
            Why Choose <b>Upride</b> as your choice
          </p>
          <p>for a comprehensive driving learning experience?</p>
        </div>
        <div className="d-flex justify-content-between mt-2 mb-5">
          <StatisticsInfo
            value={"1000+"}
            about={"Trained"}
            info={"through Upride"}
            color={"#FF5757"}
          />
          <StatisticsInfo
            value={"99%"}
            about={"Rating"}
            info={"Custome satisfaction"}
            color={"#2EC2B8"}
          />
          <StatisticsInfo
            value={"60"}
            about={"Minutes"}
            info={"per session"}
            color={"#FFDC6B"}
          />
          <StatisticsInfo
            value={"150"}
            about={"Reviews"}
            info={"Five-star rated in Google"}
            color={"#FD5444"}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
