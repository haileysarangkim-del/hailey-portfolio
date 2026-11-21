"use client";

import { Nav, Navbar } from "react-bootstrap";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "my work" },
  { href: "#skills", label: "certie" },
];

export default function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className="site-nav align-items-start">
      <Navbar.Brand href="#home" aria-label="Home" className="p-0 m-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="hk" className="logo-star" />
      </Navbar.Brand>
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
    </Navbar>
  );
}
