"use client";

import { Nav, Navbar } from "react-bootstrap";
import Star from "@/components/Star";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "my work" },
  { href: "#skills", label: "certie" },
];

export default function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className="site-nav align-items-start">
      <Navbar.Brand href="#home" aria-label="Home" className="p-0 m-0">
        <Star className="logo-star" style={{ color: "var(--accent)" }}>
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fontSize="30"
            fontStyle="italic"
            fill="#fff"
          >
            hk
          </text>
        </Star>
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
