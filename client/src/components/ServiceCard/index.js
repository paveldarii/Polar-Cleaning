import React from "react";
import { Card, Image } from "react-bootstrap";
export default function ServiceCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Image roundedCircle variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
