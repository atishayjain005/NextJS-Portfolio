import Image from "next/image";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/Logo.png" width="70" height="70" alt="logo" className='rounded-3' />
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-light" href="#about_me">About</Nav.Link>
          <Nav.Link className="text-light" href="#my_work">Work</Nav.Link>
          <Nav.Link className="text-light" href="#contact_me">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
