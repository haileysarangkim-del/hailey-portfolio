import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "@/components/Marquee";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="visually-hidden">My work</h2>
      <Marquee text="my work" />
      <Container>
        <Row className="g-5 justify-content-center">
          {projects.map((p) => (
            <Col xs={6} md={4} key={p.title}>
              <Link href={`/projects/${p.slug}`} className="folder" aria-label={p.title}>
                <div className="folder-art">
                  <span className="folder-back" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" className="folder-peek" />
                  <span className="folder-front" />
                </div>
                <span className="folder-name">{p.title}</span>
                <span className="folder-tags">{p.tags.join(" · ")}</span>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
