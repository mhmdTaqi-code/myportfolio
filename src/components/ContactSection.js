import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function ContactSection({ lang }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // لحالة الإرسال

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending..."); // تغيير الحالة إلى "إرسال"

    // إرسال البيانات إلى Formspree
    fetch("https://formspree.io/f/mdkevkbb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus(
            lang === "ar"
              ? "تم إرسال رسالتك بنجاح!"
              : "Your message has been sent successfully!"
          );
        } else {
          setStatus(
            lang === "ar"
              ? "حدث خطأ أثناء الإرسال. حاول مجددًا."
              : "An error occurred while sending. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus(
          lang === "ar"
            ? "حدث خطأ. حاول مجددًا."
            : "An error occurred. Please try again."
        );
      });
  };

  return (
    <section className="py-5" id="contact">
      <Container>
        <h2 className="text-center mb-4">
          {lang === "ar" ? "اتصل بي" : "Contact Me"}
        </h2>
        <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>{lang === "ar" ? "اسمك" : "Your Name"}</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              {lang === "ar" ? "البريد الالكتروني" : "Email"}
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{lang === "ar" ? "الرسالة" : "Message"}</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit">{lang === "ar" ? "إرسال" : "Send"}</Button>
        </Form>

        {/* عرض حالة الإرسال */}
        {status && <p className="text-center mt-4">{status}</p>}
      </Container>
    </section>
  );
}
