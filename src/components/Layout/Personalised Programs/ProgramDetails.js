import Card from "react-bootstrap/Card";

const ProgramDetails = (props) => {
  return (
    <Card style={{ width: "274px", height: "305px" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.details}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProgramDetails;
