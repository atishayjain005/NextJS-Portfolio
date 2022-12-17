/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { Col, Container, Row } from "react-bootstrap";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div
      style={{
        backgroundImage:
          " linear-gradient(135deg, rgba(61,0,142,1) 0%, rgba(149,9,255,1) 100%)",
      }}
      className="shadow-lg"
      id="about_me"
    >
      <Container>
        <Row
          style={{ padding: "100px 0px" }}
          className="justify-content-between align-items-center"
        >
          <Col md={5}>
            <motion.div
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <div style={{ position: "relative" }} className="mb-md-0 mb-4">
                <Image
                  src="/pic2.JPG"
                  width={496}
                  height={617}
                  alt="myPic"
                  style={{ borderRadius: "20px" }}
                  layout="responsive"
                  className=" shadow-lg border border-2 border-light"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-5 fw-bold text-light display-4">
                You should hire me because
              </h2>
              <p className="text-light h5 fw-normal  ">
                I am an experienced frontend developer with a keen eye for
                design. I am looking for a full-time opportunity to use my
                skills and make an impact.
                <br />
                <br />
                After having been in the industry for almost an year, I have
                developed various apps out there and built websites for
                established businesses.
                <br />
                <br />I am proficient with React as well as other JavaScript
                libraries and frameworks, and my experience in building
                responsive layouts is second-to-none. Feel free to contact me at
                the email address below if you would like to discuss the
                opportunity further.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
