import React from "react";
import { Jumbotron, Button, ListGroup, Col } from "react-bootstrap";
import globalStyle from "../../utils/GlobalStyle";
export default function HeroJumbotron() {
  return (
    <Jumbotron style={globalStyle.homeHero}>
      <h2>Cleaning Services for</h2>
      <h2>Every Home and Office</h2>
      <h2>in Columbus, OH</h2>
      <Col style={{ padding: "0px", fontSize: "20px" }} md={6}>
        <p>Easy Booking and Quality Cleaning.</p>
        <p>We Clean Your Space, Not Your Wallet</p>
        <p>Our Services are 100% Ensured.</p>
      </Col>
      <p>
        <Button variant="primary" href="/booking">
          Get a Free Quote
        </Button>
      </p>
    </Jumbotron>
  );
}
