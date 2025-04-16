// components/ProjectsSection.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function ProjectsSection({ lang }) {
  return (
    <section className="py-5" id="projects">
      <Container>
        <h2 className="text-center mb-5">
          {lang === "ar" ? "مشاريعي" : "My Projects"}
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1, ease: "easeOut" }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
                <Card
                  className="project-card shadow"
                  data-aos="fade-up"
                  style={{ width: "300px", minHeight: "320px" }}
                >
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold fs-4">
                      {project.title[lang]}
                    </Card.Title>
                    <Card.Text>{project.description[lang]}</Card.Text>
                    <a
                      href={project.link}
                      className="btn btn-primary mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {lang === "ar" ? "مشاهدة المشروع" : "View Project"}
                    </a>
                  </Card.Body>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
