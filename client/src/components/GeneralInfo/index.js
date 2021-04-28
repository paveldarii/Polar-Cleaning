import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import rawInfo from "../../assets/homeInfo";
import HomeInfo from "../HomeInfoCard";
import { tertialTheme } from "../../utils/GlobalStyle";
import { useHistory } from "react-router";

export default function GeneralInfo() {
  const refContainer = useRef();

  return (
    <Row
      ref={refContainer}
      style={{
        ...tertialTheme,
        color: "white",
        justifyContent: "center",
      }}
    >
      {rawInfo.map((info) => {
        return (
          <HomeInfo
            contact={info.contact}
            borderRight={info.borderRight}
            icon={info.icon}
            title={info.title}
            description={info.description}
          ></HomeInfo>
        );
      })}
    </Row>
  );
}
