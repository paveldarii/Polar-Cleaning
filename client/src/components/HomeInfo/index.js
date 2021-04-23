import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function HomeInfo(props) {
  return (
    <Container>
      <Row>
        <Col>
          <p>
            <strong>{props.title}</strong>
          </p>
          <p>{props.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
