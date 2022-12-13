import React from "react";
import Image from "next/image";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container>
      <Row style={{ padding: "200px 0px" }} className="justify-content-between">
        {/* <Col sm={6}>
          <div style={{ position: "relative",opacity:"100%" }}>
            <Image src="/contact.png" width={1000} height={1000} responsive />
          </div>
        </Col> */}
        <Col sm={12} className="text-center">
          <h2 className="fw-bold h1 text-light mb-5">Contact me!</h2>
          <p className="text-light h2 fw-light">
            I am always open to discuss your project, improve your online
            presence or help with your design challenges.
          </p>
          <Row className="justify-content-center">
            <Col sm={4}>
              <p className="text-light h5 fw-light mt-4">
                <span>Email me at :</span>&nbsp;
                <a href="mailto:atishay005@gmail.com">atishay005@gmail.com</a>
              </p>
            </Col>
            <Col sm={4}>
              <p className="text-light h5 fw-light mt-4">
                <a href="/AtishayJainFinal.pdf" target="_blank">
                  Take a look at my resume
                </a>
              </p>
            </Col>
          </Row>
        </Col>
        {/* <Col sm={5}>
          <div style={{ borderRadius: "20px" }}>
            <Form className="text-center">
              <Form.Group
                className="mb-3 bg-transparent"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="text"
                  className="bg-transparent border border-2 border-secondary"
                  // style={{ border: "solid 2px rgba(149,9,255,1)" }}
                  placeholder="Your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  className="bg-transparent border border-2 border-secondary"
                  // style={{ border: "solid 2px rgba(149,9,255,1)" }}
                  placeholder="Your email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  className="bg-transparent border border-2 border-secondary"
                  // style={{ border: "solid 2px rgba(149,9,255,1)" }}
                  placeholder="Organization name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  className="bg-transparent border border-2 border-secondary"
                  // style={{ border: "solid 2px rgba(149,9,255,1)" }}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
}
