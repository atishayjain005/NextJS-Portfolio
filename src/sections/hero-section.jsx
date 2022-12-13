import React from "react";
import Image from "next/image";

import { Button, Col, Container, Row } from "react-bootstrap";

import H2 from "../components/htmlElements/H2";
import H1 from "../components/htmlElements/H1";

const buttonOne = {
  background: "transparent",
  color: "rgba(149,9,255,1)",
  border: "solid 1px rgba(149,9,255,1)",
  padding: "12px 24px",
};
const buttonTwo = {
  padding: "13px 24px",
  background:
    "linear-gradient(135deg, rgba(61,0,142,1) 0%, rgba(149,9,255,1) 100%)",
  border: "transparent",
  marginLeft: "25px",
};

export default function HeroSection() {
  return (
    <Container>
      <Row
        style={{ padding: "100px 0px 50px 0px" }}
        className="justify-content-between align-items-center"
      >
        <Col sm={7}>
          <H2 classes="text-light">Hi, my name is Atishay Jain</H2>
          <H1 classes="pt-4 pb-5 text-light" fw="bold">
            I&apos;m a Frontend Developer with a non-tech. background
          </H1>
          <div>
            <Button style={buttonOne}>My Work</Button>
            <Button style={buttonTwo}>Let&apos;s Talk</Button>
          </div>
        </Col>
        <Col sm={4}>
          <div style={{ position: "relative" }}>
            <Image
              src="/pic.jpg"
              width={350}
              height={574}
              alt="hero-img"
              className="p-2 border border-2 border-dark"
              style={{ borderRadius: "200px 200px 20px 20px" }}
              layout="responsive"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
