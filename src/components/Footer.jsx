import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-black">
      <hr />
      <Container>
        <Row className="align-items-center py-5 flex-md-row flex-column text-center gap-md-2 gap-3 text-md-start">
          <Col>
            <Row className="align-items-center">
              <Col md={2}>
                <a href="#1" style={{ position: "relative" }}>
                  <Image src="/Logo.png" alt="logo" width="70" height="70" />
                </a>
              </Col>
              <Col md={10}>
                <p className="m-0 text-light">Atishay Jain</p>
                <p className="m-0 text-light">Frontend Developer</p>
              </Col>
            </Row>
          </Col>
          <Col className="text-md-end">
            <p className="m-0 text-light">
              Copyright © 2022 Atishay Jain
              <br />
              -All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
