/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import H2 from "../../components/htmlElements/H2";
import H3 from "../../components/htmlElements/H3";
import P from "../../components/htmlElements/P";

const card = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function WhatIDo({ whatIDoData }) {
  return (
    <Container>
      <Row style={{ padding: "140px 0px" }}>
        <Col style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              opacity: "100%",
              top: "0px",
              left: "0",
            }}
          >
            <Image
              src="/invertedComa.png"
              width={100}
              height={100}
              alt="coma"
              responsive
            />
          </div>
        </Col>
        <H2
          fw="bold"
          classes="mb-5 text-light text-center py-5"
          styling={{ zIndex: "1" }}
        >
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </H2>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              opacity: "100%",
              top: "-150px",
              right: "0",
              transform: "rotate(180deg)",
            }}
          >
            <Image
              src="/invertedComa.png"
              width={100}
              height={100}
              alt="coma"
              responsive
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row gap-3 text-center">
          {whatIDoData.map((data, index) => {
            const { header, title, content, link, cta } = data;
            return (
              <Col sm={6} key={index} className="bg-dark text-light p-5">
                <div style={card}>
                  <H3>{title}</H3>
                  <P classes="text-light d-flex flex-column flex-sm-row justify-content-evenly h5 ">
                    {content.map((lang) => (
                      <span key={lang}>{lang}</span>
                    ))}
                  </P>

                  {/* {link && <a href={link}>{link}</a>}
                {cta && <Button>{cta}</Button>} */}
                </div>
              </Col>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
