import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavbarComponent({
  darkMode,
  setDarkMode,
  lang,
  setLang,
}) {
  return (
    <Navbar
      expand="lg"
      variant={darkMode ? "dark" : "light"}
      bg={darkMode ? "dark" : "light"}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#">
          {" "}
          {lang === "ar" ? "موقعي الشخصي" : "My Website"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" data-en="About" data-ar="حول">
              {lang === "ar" ? "حول" : "About"}
            </Nav.Link>
            <Nav.Link href="#projects" data-en="Projects" data-ar="مشاريعي">
              {lang === "ar" ? "مشاريعي" : "Projects"}
            </Nav.Link>
            <Nav.Link href="#contact" data-en="Contact" data-ar="اتصل بي">
              {lang === "ar" ? "اتصل بي" : "Contact"}
            </Nav.Link>
            <Button
              variant={darkMode ? "outline-light" : "outline-dark"}
              onClick={() => setDarkMode(!darkMode)}
              className="ms-3"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
            <Button
              variant="secondary"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="ms-2"
            >
              {lang === "ar" ? "EN" : "AR"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
