import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import globalStyle from "../../utils/GlobalStyle";
export default function HeroJumbotron() {
  return (
    <Jumbotron style={globalStyle.homeHero}>
      <h4>Cleaning Services for Every Home and Office in Columbus, OH</h4>
      <ul>
        <li>Easy Booking and Quality Cleaning.</li>
        <li>We Clean Your Space, Not Your Wallet</li>
        <li>Our Services are 100% Ensured.</li>
      </ul>
      <p>
        <Button variant="primary" href="/booking">
          Get a Free Quote
        </Button>
      </p>
    </Jumbotron>
  );
}
