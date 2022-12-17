/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { RxLink2 } from "react-icons/rx";

import { Col, Container, Row } from "react-bootstrap";

export default function Work({ workExp }) {
  return (
    <Container id="my_work">
      <Row style={{ padding: "100px 0px 20px" }}>
        <Col>
          <h2 className="mb-5 display-4 fw-bold text-light">My work</h2>
          {workExp.map((data, index) => {
            const { title, subTitle, content, image, techStack, link } = data;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Row className="mt-5 pb-5 align-items-start justify-content-between flex-md-row flex-column-reverse">
                  <Col md={6} className="py-2 pe-5">
                    <a href={link} className="text-decoration-none">
                      <div className="d-flex align-items-center gap-1 ">
                        <h3 className=" text-light m-0">{title}</h3>
                        <RxLink2 size={20} className="text-dark mb-1" />
                      </div>
                      <blockquote
                        style={{ color: "rgba(149,9,255,1)" }}
                        className="h5"
                      >
                        {subTitle}
                      </blockquote>
                    </a>
                    <br />
                    <p className="text-secondary h5 fw-light">{content}</p>
                    <p className="text-secondary h5 fw-light mt-5">
                      Tech. used :&nbsp;
                      <span className="text-light">{techStack}</span>{" "}
                    </p>
                  </Col>
                  <Col md={5} className="text-end mb-md-0 mb-4">
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
              </motion.div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
