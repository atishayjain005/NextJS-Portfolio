/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";

import { Button, Col, Container, Row } from "react-bootstrap";

import H2 from "../../components/htmlElements/H2";
import H1 from "../../components/htmlElements/H1";

import * as styles from "./hero-section.styles";

export default function HeroSection() {
  return (
    <Container>
      <Row
        style={{ padding: "100px 0px 50px 0px" }}
        className="justify-content-between align-items-center flex-column-reverse flex-sm-row "
      >
        <Col sm={7}>
          <H2 classes="text-light">Hi, my name is Atishay Jain</H2>
          <H1 classes="pt-4 pb-5 text-light display-4" fw="bold">
            I&apos;m a Frontend Developer
          </H1>
          <div className="d-flex gap-3">
            <Button css={styles.buttonOne}>My Work</Button>
            <Button css={styles.buttonTwo}>Let&apos;s Talk</Button>
          </div>
        </Col>
        <Col sm={4}>
          <div style={{ position: "relative" }} className="mb-sm-0 mb-5">
            <Image
              src="/pic.jpg"
              width={350}
              height={350}
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