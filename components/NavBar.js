"use client";

import { Container, Nav, Navbar } from "react-bootstrap";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className="site-nav">
      <Container>
        <Navbar.Brand href="#home">{profile.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {links.map((l) => (
              <Nav.Link key={l.href} href={l.href}>
                {l.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
