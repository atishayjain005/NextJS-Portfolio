import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutUs() {
  return (
    <Container>
      <Row style={{ padding: "100px 0px" }}>
        <Col sm={5}>
          <div style={{ position: "relative" }}>
            <Image src="/pic2.jpg" width={496} height={617} alt="myPic" layout="responsive" />
          </div>
        </Col>
        <Col sm={7}>
          <h2 className="mb-4 fw-bold">About me</h2>
          <p className="text-secondary">
            I wasn&apos;t always a designer. In a previous chapter of my life I
            worked for large tech companies as a director of marketing -
            managing a marketing team of over 50 people.
            <br />
            <br />
            In 2019, I quit my job, became a freelance designer and co-founded
            Alioned Agency. I wanted to help small businesses find their voice
            and establish a professional but friendly online presence. I love
            that my work really makes a difference for entrepreneurs and
            family-owned businesses.
            <br />
            <br />
            All my design work passes through the lens of my experience as a
            marketer. I call it marketing design. It&apos;s about analyzing the
            effectiveness of a design using objective marketing data - not just
            opinion.
            <br />
            <br />
            eCommerce is a field where this is especially effective. I love that
            a thoughtful redesign can directly increase a store&apos;s revenue. Check
            out my article: Designing for Conversions.
            <br />
            <br />
            Heart Icon | Good Design I love good design, photography, wine,
            travel, sport, languages and books
          </p>
        </Col>
      </Row>
    </Container>
  );
}
