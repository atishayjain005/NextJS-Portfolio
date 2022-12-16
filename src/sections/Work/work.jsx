/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";

import { Col, Container, Row } from "react-bootstrap";

export default function Work({ workExp }) {
  return (
    <Container id="my_work">
      <Row style={{ padding: "100px 0px 20px" }}>
        <Col>
          <h2 className="mb-5 h1 fw-bold text-light">My work</h2>
          {workExp.map((data, index) => {
            const { title, subTitle, content, image, techStack } = data;
            return (
              <Row
                key={index}
                className="mt-5 pb-5 align-items-start justify-content-between flex-sm-row flex-column-reverse"
              >
                <Col sm={6} className="py-2 pe-5">
                  <div>
                    <h3 className="mb-1 text-light">{title}</h3>
                    <blockquote
                      style={{ color: "rgba(149,9,255,1)" }}
                      className="h5"
                    >
                      {subTitle}
                    </blockquote>
                  </div>
                  <br />
                  <p className="text-secondary h5 fw-light">{content}</p>
                  <p className="text-secondary h5 fw-light mt-5">
                    Tech. used :&nbsp;
                    <span className="text-light">{techStack}</span>{" "}
                  </p>
                </Col>
                <Col sm={5} className="text-end mb-sm-0 mb-4">
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <Image
                      src={image}
                      alt="project"
                      width={500}
                      maxWidth={500}
                      maxHeight={375}
                      height={375}
                      className="p-2 border border-2 border-dark"
                      style={{ borderRadius: "20px" }}
                      layout="responsive"
                    />
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