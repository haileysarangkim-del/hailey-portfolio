import { Container } from "react-bootstrap";
import Star from "@/components/Star";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <header id="home" className="hero">
      <Container fluid className="px-4 px-md-5 position-relative" style={{ zIndex: 1 }}>
        <h1 className="hero-name">
          {profile.name.toLowerCase()}!
          <Star className="sparkle" style={{ top: "-4%", left: "27%" }} />
          <Star className="sparkle" style={{ top: "6%", left: "68%" }} />
          <Star className="sparkle" style={{ bottom: "-18%", right: "-2%" }} />
        </h1>
        <p className="hero-sub">
          <span>{profile.tagline}</span>
          <span>{profile.subtagline}</span>
        </p>
      </Container>
    </header>
  );
}
