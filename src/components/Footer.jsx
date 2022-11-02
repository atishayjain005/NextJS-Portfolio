import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-light">
      <Container>
        <Row className="align-items-center py-5">
          <Col>
            <Row className="align-items-center">
              <Col sm={2}>
                <a href="#1" style={{ position: "relative" }}>
                  <Image src="/Logo.png" alt="logo" width="70" height="70" />
                </a>
              </Col>
              <Col sm={10}>
                <p className="m-0">Atishay Jain</p>
                <p className="m-0">Frontend Developer</p>
              </Col>
            </Row>
          </Col>
          <Col className="text-end">
            <p className="m-0">
              © 2022 Kristina Volchek
              <br />
              made on Webflow
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
