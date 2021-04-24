import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import MyVerticallyCenteredModal from "./Success.js";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

export default function Booking() {
  const [state, dispatch] = useStoreContext();
  const [values, setValues] = useState({
    businessName: null,
    contactName: null,
    email: null,
    phone: null,
    address: null,
    description: null,
    attach: null,
  });

  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (event) => {
    //form data
    event.preventDefault();
    const fd = new FormData();
    fd.append("file", values.attach);
    setValues({ ...values, attach: [fd] });
    console.log(values);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    if (form.checkValidity() === true) {
      API.saveServiceRequest({
        ...values,
      })
        .then((result) => {
          dispatch({
            type: ADD_POST,
            post: result.data,
          });
          console.log(result);
          setModalShow(true);
        })
        .catch((err) => console.log(err));
    }

    setValidated(true);
  };
  return (
    <Wrapper>
      <Form
        noValidate
        validated={validated}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Form.Group controlId="formBasicName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            type="name"
            value={values.businessName}
            placeholder="Business name (optional)"
            onChange={(e) =>
              setValues({ ...values, businessName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="First & last name"
            value={values.contactName}
            required
            onChange={(e) =>
              setValues({ ...values, contactName: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="telephone"
            required
            placeholder="Phone number (home or mobile)"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Job Address</Form.Label>
          <Form.Control
            type="address"
            required
            placeholder="Your address"
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>How can we help?</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter a description of the work you would like done"
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Please attach photos or documents that will help describe your job. "
              onChange={(e) =>
                setValues({ ...values, attach: e.target.files[0] })
              }
            />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <MyVerticallyCenteredModal
          data={values}
          show={modalShow}
          disabled={state.loading}
          onHide={() => setModalShow(false)}
        />
      </Form>
    </Wrapper>
  );
}
