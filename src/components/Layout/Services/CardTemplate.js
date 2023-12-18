import Card from "react-bootstrap/Card";

const CardTemplate = (props) => {
  return (
    <Card
      bg={"white"}
      text={"dark"}
      style={{ width: "15rem" }}
      className="mb-2">
      <div className="d-flex justify-content-evenly">
        <div
          style={{
            marginRight: "10px",
            display: "inline",
            paddingLeft: "12px",
          }}
          className="align-self-center">
          {props.logo}
        </div>
        <Card.Text
          style={{
            margin: "auto 8px",
            padding: "15px 0px",
            fontFamily: "Archivo",
            fontWeight: "500",
            fontSize: "16px",
            display: "inline",
            lineHeight: "24px",
          }}>
          {props.content}
        </Card.Text>
      </div>
    </Card>
  );
};

export default CardTemplate;
