import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import rawInfo from "../../assets/homeInfo";
import HomeInfo from "../HomeInfoCard";
import { tertialTheme } from "../../utils/GlobalStyle";

export default function GeneralInfo() {
  return (
    <Container
      fluid
      style={{
        ...tertialTheme,
        color: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Row>
        {rawInfo.map((info) => {
          return (
            <Col md={4}>
              <HomeInfo
                title={info.title}
                description={info.description}
              ></HomeInfo>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
