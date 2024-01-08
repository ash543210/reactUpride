import Card from "react-bootstrap/Card";
import classes from "./SchoolInfo.module.css";
const SchoolInfo = (props) => {
  const style = "d-sm-block d-md-inline-block " + classes.col4;
  return (
    <div className={style} style={{}}>
      <Card className="w-100 h-100">
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title
            style={{ fontWeight: 500, fontSize: "24px", lineHeight: "36px" }}>
            {props.title}
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "32px",
                display: "block",
              }}>
              {props.address}
            </p>
          </Card.Title>
          <div className="d-flex jusitfy-content-between">
            <div
              style={{
                boxShadow:
                  "0px 3.306964874267578px 3.3177642822265625px 0px #00000005, 0px 6.993660926818848px 8.205988883972168px 0px #00000009, 0px 11.88980770111084px 16.439990997314453px 0px #0000000D, 10px 20.717979431152344px 33.619361877441406px 0px #00000012",
                display: "inline-block",
                borderRadius: "40px",
                backgroundColor: "white",
                padding: "3px 15px",
                marginRight: "auto",
                textAlign: "center",
                width: "95px",
                height: "36px",
              }}>
              <Card.Text
                style={{
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "30px",
                }}>
                <svg
                  style={{ marginRight: "12px" }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.81121 2.24643C10.1972 1.46855 11.3061 1.47831 11.6888 2.24643L13.8248 6.55581L18.6037 7.24907C19.4607 7.37275 19.8042 8.42405 19.1827 9.02619L15.7252 12.3786L16.543 17.1144C16.6902 17.9704 15.7841 18.6084 15.0252 18.2113L10.75 15.9752L6.47476 18.2113C5.71588 18.6116 4.80983 17.9704 4.95703 17.1144L5.77478 12.3786L2.3173 9.02619C1.69581 8.42405 2.03927 7.37275 2.89628 7.24907L7.67524 6.55581L9.81121 2.24643Z"
                    fill="#FDBC7D"
                  />
                </svg>
                {props.rating}
              </Card.Text>
            </div>

            <Card.Text
              style={{
                display: "inline-block",
                color: "#FF006E",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "30px",
                marginRight: "8px",
              }}>
              {`₹ ${props.pricing}/`}
            </Card.Text>
            <Card.Text
              style={{
                display: "inline-block",
                color: "#696969",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "24px",
              }}>
              {`Starting From`}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SchoolInfo;
