import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
export default function HeroJumbotron() {
  return (
    <Jumbotron>
      <h3>Cleaning Services for Every Home and Office in Columbus, OH</h3>
      <ul>
        <li>Easy Booking and Quality Cleaning.</li>
        <li>We Clean Your Space, Not Your Wallet</li>
        <li>Our Services are 100% Ensured.</li>
      </ul>
      <p>
        <Button variant="primary">Get a Free Quote</Button>
      </p>
    </Jumbotron>
  );
}
