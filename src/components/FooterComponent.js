// components/FooterComponent.js
import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function FooterComponent({ darkMode }) {
  return (
    <footer className="py-4" style={{ textAlign: "center", direction: "ltr" }}>
      <Container>
        <div className="mb-3 d-flex justify-content-center gap-3">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            <FaGithub size={24} color={darkMode ? "#f0f0f0" : "#333"} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            <FaLinkedin size={24} color={darkMode ? "#f0f0f0" : "#333"} />
          </a>
        </div>
        <small>
          &copy; {new Date().getFullYear()}{" "}
          {darkMode ? "MohammadTaqi" : "محمدتقي"}.
        </small>
      </Container>
    </footer>
  );
}
