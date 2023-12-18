import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OfferCards = (props) => {
  return (
    <Card
      className="d-flex mt-5"
      style={{
        width: "575px",
        height: "302px",
        borderRadius: "0px, 10px, 10px, 0px",
      }}>
      <Card.Body
        style={{
          display: "inline-block",
          width: "50%",
          height: "302px",
          padding: "30px 30px",
          color: "#FFFFFF",
          backgroundColor: "#FF5757",
        }}>
        <Card.Title
          style={{ fontWeight: 600, fontSize: "32px", lineHeight: "48px" }}>
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "24px",
            width: "133px",
            height: "72px",
            marginBottom: "30px",
          }}>
          {props.terms}
        </Card.Text>
        <Button
          style={{
            borderRadius: "40px",
            width: "188px",
            height: "40px",
            color: "#FF5757",
            backgroundColor: "white",
          }}
          variant="primary">
          Redeem Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default OfferCards;
