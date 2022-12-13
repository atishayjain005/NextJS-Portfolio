import Image from "next/image";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/Logo.png" width="100" height="100" alt="logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-light" href="#deets">About</Nav.Link>
          <Nav.Link className="text-light" href="#memes">Work</Nav.Link>
          <Nav.Link className="text-light" href="#deets">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
