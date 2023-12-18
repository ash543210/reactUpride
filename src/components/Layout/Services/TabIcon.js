const TabIcon = (props) => {
  const textColor = props.isactive === "true" ? "#FF5757" : "#4E4E4E";

  return (
    <div className="d-flex flex-column jusify-content-around">
      <div style={{ padding: "15px 0px" }} className="align-self-center">
        {props.icon}
      </div>
      <div
        style={{
          width: "70%",
          padding: "15px 0px",
          textAlign: "center",
          color: { textColor },
        }}
        className={"align-self-center"}>
        {props.title}
      </div>
    </div>
  );
};

export default TabIcon;
