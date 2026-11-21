import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <h2 className="section-title mb-5">Projects</h2>
        <Row className="g-4">
          {projects.map((p) => (
            <Col md={6} lg={4} key={p.title}>
              <Card className="project-card h-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="card-img-top" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{p.title}</Card.Title>
                  <Card.Text className="text-secondary">
                    {p.description}
                  </Card.Text>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <Badge key={t} pill className="tag">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    <a href={p.live} className="btn btn-primary btn-sm">
                      <i className="bi bi-box-arrow-up-right me-1" />
                      Live
                    </a>
                    <a href={p.code} className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-github me-1" />
                      Code
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
