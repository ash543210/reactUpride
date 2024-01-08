import image from "../../Assets/personalised.png";
import classes from "./PersonalisedPrograms.module.css";
const PersonalisedPrograms = () => {
  const imageStyle = " " + classes.col4;
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="d-flex flex-column mt-5 px-md-5">
        <div className="align-self-center my-5">
          <p style={{ fontWeight: 600, fontSize: "48px", lineHeight: "46px" }}>
            Personalized Learning Programs
          </p>
        </div>
        <div className="d-md-flex flex-md-row d-sm-flex d-sm-column my-5 justify-content-md-around">
          <img className={imageStyle} src={image}></img>
          <div className="align-self-center">
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
