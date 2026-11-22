import { Col, Container, Row } from "react-bootstrap";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h2 className="m-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about-title.png" alt="About" className="about-title-img" />
            </h2>
          </Col>
          <Col md={8}>
            {profile.about.map((p, i) => (
              <p key={i} className="fs-5 text-secondary">
                {p}
              </p>
            ))}
            <p className="mb-0">
              <i className="bi bi-geo-alt-fill text-primary me-2" />
              {profile.location}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
