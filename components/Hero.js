import { Col, Container, Row } from "react-bootstrap";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <header id="home" className="hero">
      <Container>
        <Row className="align-items-center gy-5">
          <Col md={7}>
            <p className="text-uppercase fw-semibold text-primary mb-2">
              {profile.role}
            </p>
            <h1 className="mb-3">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="lead text-secondary mb-4">{profile.tagline}</p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <a href="#projects" className="btn btn-primary btn-lg px-4">
                View my work
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg px-4">
                Get in touch
              </a>
            </div>
            <div className="d-flex gap-2">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <div className="avatar" aria-hidden="true">
              {profile.name.charAt(0)}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
