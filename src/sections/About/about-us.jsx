/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutUs() {
  return (
    <div
      style={{
        backgroundImage:
          " linear-gradient(135deg, rgba(61,0,142,1) 0%, rgba(149,9,255,1) 100%)",
      }}
      className="shadow-lg"
      id='about_me'
    >
      <Container>
        <Row
          style={{ padding: "100px 0px" }}
          className="justify-content-between align-items-center"
        >
          <Col md={5}>
            <div style={{ position: "relative" }} className='mb-md-0 mb-4'>
              <Image
                src="/pic2.JPG"
                width={496}
                height={617}
                alt="myPic"
                style={{ borderRadius: "20px" }}
                layout="responsive"
                className=" shadow-lg border border-2 border-light"
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="mb-5 fw-bold text-light h1">You should hire me because</h2>
            <p className="text-light h5 fw-normal  ">
              I am an experienced frontend developer with a keen eye for design.
              I am looking for a full-time opportunity to use my skills and make
              an impact.
              <br />
              <br />
              After having been in the industry for almost an year, I have
              developed some of the apps out there and built
              websites for established businesses.
              <br />
              <br />I am proficient with React as well as other JavaScript
              libraries and frameworks, and my experience in building responsive
              layouts is second-to-none. Feel free to contact me at the email
              address below should you have any questions or would like to
              discuss the opportunity further.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
