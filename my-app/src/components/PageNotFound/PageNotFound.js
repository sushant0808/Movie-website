import { Link } from "react-router-dom";
import React from "react";

function PageNotFound() {
  return (
    <div
      style={{
        color: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "88vh",
      }}
    >
      <h1 style={{ fontSize: "100px", color: "red" }}>404</h1>
      <p style={{ fontSize: "20px", color: "white" }}>Page not found</p>
      <Link to="/" style={{ marginTop: "20px", color: "lightblue" }}>
        Go back to home page 👆
      </Link>
    </div>
  );
}

export default PageNotFound;
