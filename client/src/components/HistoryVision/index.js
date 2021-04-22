import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function HistoryVision() {
  return (
    <Container>
      <Row>
        <h2>Polar Cleaning is Fastest Growing Cleaning Company in Columbus</h2>
        <p>
          Polar Cleaning is a professional cleaning services company, offering
          reliable residential cleaning services and commercial cleaning
          services in Columbus. Polar Cleaning quickly became the market leader
          because of our great customer service and exceptional cleaning
          results. Our cleaners are hand-picked, extensively trained and fully
          screened. The secret to our growth is using the latest techniques and
          equipment to provide top quality service to our customers.
        </p>
        <p>We deliver hassle-free services that keep you stress free!</p>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Company History</h2>
          <p>
            No other cleaning company can match Polar Cleaning’s local industry
            knowledge. This experience has led us to develop our own systems and
            procedures. These unique benchmarks have made Polar Cleaning one of
            the top cleaning companies in Columbus.
          </p>
          <a href="/about">Read More</a>
        </Col>
        <Col md={6}>
          <h2>Polar Cleaning Vision</h2>
          <p>
            Polar Cleaning’s vision is to become the leading provider of
            cleaning services in Columbus. In order to achieve this goal, we
            work very hard learning innovative techniques and procedures. We
            work with our customers to provide a better quality of life for them
            and a cleaning solution for all their requirements.
          </p>
          <a href="/about">Read More</a>
        </Col>
      </Row>
    </Container>
  );
}
