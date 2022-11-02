import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const card = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function WhatIDo({ whatIDoData }) {
  return (
    <Container>
      <Row style={{ padding: "100px 0px" }}>
        <h2 className="fw-bold mb-5">What I do</h2>
        {whatIDoData.map((data, index) => {
          const { header, title, content, link, cta } = data;
          return (
            <Col sm={4} key={index} style={card}>
              <h3>{title}</h3>
              <p className="text-secondary">{content}</p>
              {link && <a href={link}>{link}</a>}
              {cta && <Button>{cta}</Button>}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
