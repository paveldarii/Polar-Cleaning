import React from "react";
import { centerText } from "../../utils/GlobalStyle";

export default function HomeInfo(props) {
  return (
    <span style={{ centerText }}>
      <p style={{ margin: "0px" }}>
        <strong>{props.title}</strong>
      </p>
      <p style={{ margin: "0px" }}>{props.description}</p>
    </span>
  );
}
