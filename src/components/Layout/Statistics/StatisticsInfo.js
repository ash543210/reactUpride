const StatisticsInfo = (props) => {
  return (
    <div className="d-flex flex-column justify-content-around">
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: props.color,
          fontWeight: 800,
          fontSize: "48px",
          lineHeight: "58px",
          textAlign: "center",
          color: "white",
        }}>
        {props.value}
      </div>
      <div style={{ fontWeight: 800, fontSize: "48px", lineHeight: "55px" }}>
        {props.about}
      </div>
      <div
        style={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "26px",
          textAlign: "center",
        }}>
        {props.info}
      </div>
    </div>
  );
};

export default StatisticsInfo;
