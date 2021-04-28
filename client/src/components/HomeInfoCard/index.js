import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { centerText } from "../../utils/GlobalStyle";
import { Linking } from "react-native";

export default function HomeInfo(props) {
  const handleClick = () => {
    if (props.contact) {
      Linking.openURL(props.contact);
    }
  };
  return (
    <Row
      style={{
        margin: "10px",
        borderRight: props.borderRight,
        paddingTop: "20px",
        paddingBottom: "20px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <props.icon
        style={{
          fontSize: "45px",
        }}
      ></props.icon>
      <Col style={{ padding: "0" }}>
        <Col style={{ paddingLeft: "3px" }}>
          <strong>{props.title}</strong>
        </Col>
        <Col style={{ paddingLeft: "3px" }}>{props.description}</Col>
      </Col>
    </Row>
  );
}
