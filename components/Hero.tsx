import { Container } from "react-bootstrap";
import HeroName from "@/components/HeroName";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <header id="home" className="hero">
      <Container fluid className="px-4 px-md-5 position-relative" style={{ zIndex: 1 }}>
        <h1 className="m-0">
          <HeroName />
        </h1>
        <p className="hero-sub">
          <span>{profile.tagline}</span>
          <span>{profile.subtagline}</span>
        </p>
      </Container>
    </header>
  );
}
