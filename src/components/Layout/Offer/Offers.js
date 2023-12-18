import Container from "react-bootstrap/Container";
import OfferCards from "./OfferCards";

const Offers = () => {
  return (
    <Container fluid style={{ padding: "0px 0px" }} className="mb-5">
      <div className="d-flex justify-content-center" style={{ width: "100%" }}>
        <div className="d-flex flex-column" style={{ width: "83%" }}>
          <div className="d-flex flex-column" style={{ color: "#F8444F" }}>
            <p
              style={{
                width: "93px",
                height: "27px",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "27px",
                display: "inline-block",
                marginBottom: "0px",
              }}>
              Our Offers
            </p>
            <p style={{ padding: "0px 15px" }}>
              <svg
                width="50"
                height="2"
                viewBox="0 0 50 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="50" y2="1" stroke="#F8444F" strokeWidth="2" />
              </svg>
            </p>
          </div>
          <div className="mb-2">
            <p
              style={{ fontWeight: 600, fontSize: "48px", lineHeight: "60px" }}>
              Best offers this month
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div
              className="my-2"
              style={{ marginRight: "auto", display: "inline-block" }}>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "24px",
                  display: "inline-block",
                }}>
                Detailed Description of these offers here.
              </p>
            </div>
            <div
              style={{
                borderRadius: "50px",
                display: "inline-block",
                backgroundColor: "#FFF1F1",
                width: "102px",
                height: "40px",
              }}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#FF5757",
                  margin: "0px 0px",
                  padding: "8px 8px",
                  textAlign: "center",
                }}>
                View All
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-5">
            <OfferCards
              title={"Get 500 Discount"}
              terms={"on minimum shopping of Rs. 999."}
            />
            <OfferCards
              title={"Get 500 Flat Discount"}
              terms={"on minimum shopping of Rs. 999."}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Offers;
