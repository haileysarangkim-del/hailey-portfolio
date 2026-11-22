import { Col, Container, Row } from "react-bootstrap";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <Container>
        <h2 className="visually-hidden">My work</h2>
        <Row className="g-5 justify-content-center">
          {projects.slice(0, 4).map((p) => (
            <Col xs={6} lg={3} key={p.title}>
              <a href={p.live} className="folder" aria-label={p.title}>
                <div className="folder-art">
                  <span className="folder-back" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" className="folder-peek" />
                  <span className="folder-front" />
                </div>
                <span className="folder-name">{p.title}</span>
                <span className="folder-tags">{p.tags.join(" · ")}</span>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
