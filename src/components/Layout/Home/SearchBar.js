import React from "react";
import classes from "./SearchBar.module.css";
const SearchBar = function () {
  return (
    <div style={{ paddingTop: "20px" }}>
      <form
        style={{
          boxShadow: "0px 2px 4px #dbd5d5",
          borderWidth: "0.5px",
        }}
        className={classes.form}>
        <input
          className={classes.input}
          type="search"
          placeholder="Search..."
        />
        <span
          style={{
            borderLeft: "1px solid",
            color: "#bdc1c6",
          }}></span>
        <button className={classes.button} type="submit">
          Search
        </button>
        <button
          style={{
            color: "white",
            fontFamily: "Roboto",
            borderRadius: "25px",
            borderWidth: 0,
            backgroundColor: "#FF5757",
            padding: "2 2",
            fontSize: "16px",
            height: "50%",
            marginTop: "4px",
            marginLeft: "3px",
            marginRight: "0px",
            marginBottom: "auto",
          }}>
          <svg
            style={{ marginRight: "2px" }}
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.2678 11.7672H21.5796C21.2246 7.32092 17.6693 3.76324 13.2256 3.40825V0.732684C13.2256 0.328076 12.8977 0 12.4933 0C12.089 0 11.7611 0.328076 11.7611 0.732684V3.40825C7.31735 3.76324 3.76205 7.32092 3.4071 11.7672H0.732231C0.327873 11.7672 0 12.0953 0 12.5001C0 12.9047 0.327873 13.2328 0.732231 13.2328H3.4071C3.76205 17.6791 7.31735 21.2368 11.7611 21.5919V24.2673C11.7611 24.6719 12.089 25 12.4933 25C12.8979 25 13.2256 24.6719 13.2256 24.2673V21.5919C17.6693 21.2368 21.2248 17.6791 21.5796 13.2328H24.2678C24.6721 13.2328 25 12.9047 25 12.5001C25 12.0953 24.6721 11.7672 24.2678 11.7672ZM12.4933 20.156C8.27446 20.156 4.84219 16.7214 4.84219 12.5001C4.84219 8.27862 8.27446 4.84404 12.4933 4.84404C16.7122 4.84404 20.1445 8.27862 20.1445 12.5001C20.1445 16.7214 16.7122 20.156 12.4933 20.156Z"
              fill="white"
            />
          </svg>
          Near Me
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
