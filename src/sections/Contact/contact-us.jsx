/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container id="contact_me">
      <Row style={{ padding: "200px 0px" }} className="justify-content-between">
        <Col md={12} className="text-center">
          <h2
            className="fw-bold display-4  mb-5"
            style={{ color: "rgba(149,9,255,1)" }}
          >
            Contact me!
          </h2>
          <p className="text-light h2 fw-light">
            I am always open to discuss your project, improve your online
            presence or help with your design challenges.
          </p>
          <Row className="justify-content-center  gap-3 ">
            <Col lg={4} className="bg-dark mt-4 p-4">
              <p className="text-light h5  fw-light m-0">
                <span>Email me at :</span>&nbsp;
                <a
                  className="m-0 text-decoration-none text-light"
                  href="mailto:atishay005@gmail.com"
                >
                  atishay005@gmail.com
                </a>
              </p>
            </Col>
            <Col lg={4} className="bg-dark mt-4 p-4">
              <p className="text-light h5 fw-light m-0 ">
                <a
                  className="m-0 text-decoration-none text-light"
                  href="/resumeF.pdf"
                  target="_blank"
                >
                  Take a look at my resume
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
