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
        className="justify-content-between align-items-center flex-column-reverse flex-md-row "
      >
        <Col md={7}>
          <H2 classes="text-light">Hi, my name is Atishay Jain</H2>
          <H1 classes="pt-4 pb-5 text-light display-4" fw="bold">
            I&apos;m a Frontend Developer
          </H1>
          <div className="d-flex gap-3">
            <a href="#my_work" css={styles.buttonOne}>My Work</a>
            <a href="#contact_me" css={styles.buttonTwo}>Let&apos;s Talk</a>
          </div>
        </Col>
        <Col md={4}>
          <div style={{ position: "relative" }} className="mb-md-0 mb-5">
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
