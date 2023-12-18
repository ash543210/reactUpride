import Card from "react-bootstrap/Card";
import image from "./user.png";

const ReviewCard = (props) => {
  const star = (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.77895 0.557861L7.14021 5.00925H11.5454L7.98152 7.76035L9.34278 12.2117L5.77895 9.46063L2.21511 12.2117L3.57638 7.76035L0.0125418 5.00925H4.41768L5.77895 0.557861Z"
        fill="#FFE600"
      />
    </svg>
  );

  return (
    <Card style={{ width: "406px", height: "309px" }} className="mb-5 ">
      <Card.Body>
        <Card.Text style={{ textAlign: "left" }}>
          <svg
            width="30"
            height="23"
            viewBox="0 0 30 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.814 0V1.68713C26.3953 2.55938 24.5 3.93663 23.1279 5.81886C21.7558 7.67814 21.0698 9.61776 21.0698 11.6377C21.0698 12.0739 21.1395 12.3952 21.2791 12.6018C21.3721 12.7395 21.4767 12.8084 21.593 12.8084C21.7093 12.8084 21.8837 12.728 22.1163 12.5674C22.8605 12.0394 23.8023 11.7754 24.9419 11.7754C26.2674 11.7754 27.4419 12.3149 28.4651 13.3937C29.4884 14.4496 30 15.7121 30 17.1811C30 18.7191 29.407 20.0734 28.2209 21.244C27.0581 22.4147 25.6395 23 23.9651 23C22.0116 23 20.3256 22.2081 18.907 20.6243C17.4884 19.0404 16.7791 16.9172 16.7791 14.2545C16.7791 11.1557 17.7442 8.37824 19.6744 5.92216C21.6047 3.46607 24.6512 1.49202 28.814 0ZM12.0349 0V1.68713C9.61628 2.55938 7.72093 3.93663 6.34884 5.81886C4.97674 7.67814 4.2907 9.61776 4.2907 11.6377C4.2907 12.0739 4.36047 12.3952 4.5 12.6018C4.59302 12.7395 4.69767 12.8084 4.81395 12.8084C4.93023 12.8084 5.10465 12.728 5.33721 12.5674C6.0814 12.0394 7.02326 11.7754 8.16279 11.7754C9.48837 11.7754 10.6628 12.3149 11.686 13.3937C12.7093 14.4496 13.2209 15.7121 13.2209 17.1811C13.2209 18.7191 12.6279 20.0734 11.4419 21.244C10.2791 22.4147 8.86047 23 7.18605 23C5.23256 23 3.54651 22.2081 2.12791 20.6243C0.709302 19.0404 0 16.9172 0 14.2545C0 11.1557 0.965116 8.37824 2.89535 5.92216C4.82558 3.46607 7.87209 1.49202 12.0349 0Z"
              fill="url(#paint0_linear_0_117)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_117"
                x1="5.10647"
                y1="27.7346"
                x2="40.7888"
                y2="-10.8449"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF006E" />
                <stop offset="1" stop-color="#FFBE0B" />
              </linearGradient>
            </defs>
          </svg>
        </Card.Text>
        <Card.Text
          style={{
            textAlign: "left",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "32px",
          }}>
          {props.review}
        </Card.Text>
        <div
          className="mt-5 d-flex justify-content-evenly"
          style={{
            width: "220px",
            height: "62px",
            borderRadius: "59px",
            boxShadow:
              "0px 3.306964874267578px 3.3177642822265625px 0px #00000005, 0px 6.993660926818848px 8.205988883972168px 0px #00000009, 0px 11.88980770111084px 16.439990997314453px 0px #0000000D, 10px 20.717979431152344px 33.619361877441406px 0px #00000012, 10px 51px 94px 0px #0000001C",
          }}>
          <img
            style={{
              width: "30%",
              height: "80%",
              display: "inline",
              borderRadius: "50%",
            }}
            src={image}></img>
          <div className="d-flex flex-column">
            <p style={{ display: "inline-block", marginBottom: "0px" }}>
              {props.user}
            </p>
            <p
              className="align-self-start"
              style={{ display: "inline-block", marginBottom: "0px" }}>
              {[1, 2, 3, 4, 5].map(() => star)}
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
