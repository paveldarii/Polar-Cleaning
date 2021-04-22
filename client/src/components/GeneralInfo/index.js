import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function GeneralInfo() {
  return (
    <Container>
      <Row>
        <Col md={4}>We are open Mon-Fri 8:30AM-5:30PM</Col>
        <Col md={4}>Cal us now 6146413785</Col>
        <Col md={4}>Email us polarcleaningllc@gmail.com</Col>
      </Row>
    </Container>
  );
}
