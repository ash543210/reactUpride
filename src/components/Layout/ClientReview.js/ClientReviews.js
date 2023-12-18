import UserReviews from "./UserReviews";

const ClientReviews = () => {
  return (
    <div
      style={{ width: "90%" }}
      className="d-flex flex-column align-self-center">
      <p
        style={{
          fontSize: "44px",
          fontWeight: 600,
          lineHeight: "66px",
          letterSpacing: "0.04em",
          textAlign: "left",
        }}>
        What Our Clients Say
      </p>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "24px",
          letterSpacing: "0.005em",
          textAlign: "left",
        }}>
        Quality training and easy to get driving license
      </p>
      <UserReviews />
    </div>
  );
};

export default ClientReviews;
