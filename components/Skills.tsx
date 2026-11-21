import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <Container>
        <h2 className="section-title mb-5">Skills</h2>
        <Row className="g-4">
          {skills.map((s) => (
            <Col md={6} key={s.name}>
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold">{s.name}</span>
                <span className="text-secondary">{s.level}%</span>
              </div>
              <ProgressBar
                now={s.level}
                className="skill-bar"
                aria-label={`${s.name} proficiency`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
