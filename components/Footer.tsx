import { Container } from "react-bootstrap";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer py-4">
      <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
        <span>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span>Built with Next.js, React &amp; Bootstrap</span>
      </Container>
    </footer>
  );
}
