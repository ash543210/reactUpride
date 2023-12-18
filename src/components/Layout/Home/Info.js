import classes from "./Info.module.css";

const Info = function () {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "30px" }}>
      <p className={classes.p}>Learn Driving: Book</p>
      <p
        className={classes.p}
        style={{
          marginBottom: 0,
        }}>
        <b>Top Driving </b>
        <strong style={{ color: "#FD5444" }}>Schools</strong>
      </p>
      <p className={classes.p}>Near You</p>
      <div style={{ paddingTop: "20px" }}>
        <p style={{ fontFamily: "Archivo", marginBottom: 0 }}>
          Empower yourself with safe and confident driving skills today.
        </p>
        <p style={{ fontFamily: "Archivo" }}>
          Book expert Instructors and top-rated driving schools near you.{" "}
        </p>
      </div>
    </div>
  );
};

export default Info;
