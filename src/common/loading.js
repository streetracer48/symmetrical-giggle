import React from "react";
import img from "./spinner.gif";

export default function spinner() {
  return (
    <div>
      {" "}
      <img
        src={img}
        style={{
          width: "200px",
          margin: "auto",
          display: "block"
        }}
        alt=""
      />
    </div>
  );
}