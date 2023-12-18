import image from "../../Assets/personalised.png";
const PersonalisedPrograms = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="d-flex flex-column mt-5" style={{ width: "90%" }}>
        <div className="align-self-center my-5">
          <p style={{ fontWeight: 600, fontSize: "48px", lineHeight: "46px" }}>
            Personalized Learning Programs
          </p>
        </div>
        <div className="d-flex my-5">
          <img className="me-5" style={{ width: "50%" }} src={image}></img>
          <div className="ms-5 align-self-center">
            <p
              style={{
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "58px",
                width: "318px",
                height: "116px",
              }}>
              Easy, reliable, and flexible.
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                width: "417px",
                height: "130px",
              }}>
              At Upride, we know that every learner is unique, and so are their
              needs when it comes to driving education. Our commitment to
              personalized learning goes beyond the conventional, offering
              tailor-made programs designed to cater to individual preferences .
            </p>
            <a
              style={{
                marginTop: "20px",
                color: "#FD5444",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "26px",
                textDecoration: "none",
              }}
              href="#lol">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalisedPrograms;
