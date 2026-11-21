"use client";

import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app. Swap for an API route or a form service later.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-alt">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <h2 className="section-title">Contact</h2>
            <p className="text-secondary fs-5">
              Have a project in mind or just want to say hi? Send me a message.
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill text-primary me-2" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </Col>
          <Col md={7}>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" value={form.name} onChange={onChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={form.email} onChange={onChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" value={form.message} onChange={onChange} required />
              </Form.Group>
              <button type="submit" className="btn btn-primary px-4">
                Send message
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
