import React from "react";
import { Form } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
export default function Booking() {
  return (
    <Wrapper>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control type="name" placeholder="Business name (optional)" />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control type="name" placeholder="First & last name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Phone number (home or mobile)"
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Job Address</Form.Label>
          <Form.Control type="address" placeholder="Your address" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>How can we help?</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter a description of the work you would like done"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Please attach photos or documents that will help describe your job. "
            />
          </Form.Group>
        </Form>
      </Form>
    </Wrapper>
  );
}
