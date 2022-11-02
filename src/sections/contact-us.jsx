import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container>
      <Row style={{ padding: "100px 0px" }}>
        <h2 className="fw-bold">Hire me!</h2>
        <Col sm={6}>
          <p>
            I am always open to discuss your project, improve your online
            presence or help with your design challenges.
          </p>
          <p>
            <span>Email me at</span>
            <br />
            <a href="mailto:atishay005@gmail.com">atishay005@gmail.com</a>
          </p>
          <p>
            <span>Download my Resume</span>
            <br />
            <a href="mailto:atishay005@gmail.com">atishay005@gmail.com</a>
          </p>
        </Col>
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Organization name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
