import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

const buttonOne = {
  background: "transparent",
  color: "#ffa48b",
  border: "solid 1px #ffa48b",
  padding: "12px 24px",
  boxShadow:
    "6px 6px 30px 4px rgb(255 125 89 / 2%), 3px 3px 15px 2px rgb(255 125 89 / 3%), 2px 2px 8px 1px rgb(255 125 89 / 2%);",
};
const buttonTwo = {
  padding: "13px 24px",
  background: "linear-gradient(to right,#fe8c4d, #f4494e)",
  border: "transparent",
  marginLeft: "25px",
  boxShadow:
    "6px 6px 30px 4px rgb(255 125 89 / 2%), 3px 3px 15px 2px rgb(255 125 89 / 3%), 2px 2px 8px 1px rgb(255 125 89 / 2%);",
};

export default function HeroSection() {
  return (
    <Container>
      <Row style={{ padding: "140px 12px 80px 12px" }}>
        <Col sm={8}>
          <h2 className="h2">Hi, my name is Atishay</h2>
          <h1 className="h1 fw-bold pt-4 pb-5">
            I&apos;m a Frontend Developer with a non-tech. background
          </h1>
          <div>
            <Button style={buttonOne}>My Work</Button>
            <Button style={buttonTwo}>Let&apos;s Talk</Button>
          </div>
        </Col>
        <Col sm={4}>
          <div style={{ top: "-70px", position: "relative" }}>
            <Image src="/pic.jpg" width={350} height={474} alt="hero-img" layout="responsive" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
