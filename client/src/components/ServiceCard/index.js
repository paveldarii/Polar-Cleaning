import React from "react";
import { Card, Image } from "react-bootstrap";
import { useHistory } from "react-router";

export default function ServiceCard(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/booking");
  };
  return (
    <Card onClick={handleClick} style={{ width: "18rem", cursor: "pointer" }}>
      <Image roundedCircle variant="top" src={props.img} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
