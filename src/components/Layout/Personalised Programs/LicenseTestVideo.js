const LicenseTestVideo = () => {
  return (
    <div
      style={{
        width: "978px",
        height: "406px",
        borderRadius: "20px",
        border: "1px solid",
        textAlign: "center",
      }}
      className="d-flex flex-column align-self-center justify-content-evenly my-5">
      <p
        className="align-self-center pt-4"
        style={{
          fontWeight: 600,
          fontSize: "44px",
          lineHeight: "66px",
          width: "777px",
          height: "66px",
        }}>
        {"Prepare for Learner’s License Test"}
      </p>
      <p
        className="align-self-center pt-4"
        style={{
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "20px",
          width: "717px",
          height: "80px",
        }}>
        {
          "Curated videos for you to easily pass learner’s license test. Watchnow and pass the test with utmost ease."
        }
      </p>
      <button
        style={{
          width: "184px",
          height: "66px",
          borderRadius: "40px",
          color: "white",
          background:
            "linear-gradient(50.34deg, #FF006E -0.02%, #FFBE0B 141.03%)",
        }}
        className="align-self-center">
        Watch Now
      </button>
    </div>
  );
};

export default LicenseTestVideo;
