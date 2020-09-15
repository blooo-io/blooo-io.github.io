import React from "react";
import backgroundEUimage from "../../../assets/images/eu-background.svg";

export const VP: React.FunctionComponent = () => (
  <div style={{ textAlign: "center" }}>
    <img
      src={backgroundEUimage}
      height="196"
      width="196"
      className="logo rounded mr-2"
      alt=""
    />
    <p>
      <b>Verifiable eID Presentation.</b>
    </p>
  </div>
);

export default VP;
