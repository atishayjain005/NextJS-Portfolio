import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Work({ workExp }) {
  return (
    <Container>
      <Row style={{ padding: "100px 0px 20px" }}>
        <Col>
          <h1 className="mb-5 fw-bold">Featured projects</h1>
          {workExp.map((data, index) => {
            const { title, subTitle, content, image } = data;
            return (
              <Row key={index} className="mt-5 pb-5 align-items-center">
                <Col sm={6} className="py-2 pe-5">
                  <div>
                    <h4 className="mb-1">{title}</h4>
                    <blockquote className="text-secondary">
                      {subTitle}
                    </blockquote>
                  </div>
                  <p className="text-secondary">{content}</p>
                </Col>
                <Col sm={6} className="text-end">
                  <div style={{ position: "relative" }}>
                    <Image src={image} alt="project" width={500} height={375} layout="responsive" />
                  </div>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
