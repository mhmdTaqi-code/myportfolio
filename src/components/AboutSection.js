import React from "react";
import { Container } from "react-bootstrap";

export default function AboutSection({ lang }) {
  return (
    <section className="text-center py-5" id="about">
      <Container>
        <img
          src="./image/1.jpg"
          className="mx-auto mb-4 profile-img"
          alt="Profile"
        />
        <h1>
          {lang === "ar"
            ? "اهلا , انا محمدتقي مطور واجهات المواقع"
            : "Hello, I’m Mohammed Taqi, a Front-End Developer"}
        </h1>
        <p
          className="lead"
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        >
          {lang === "ar"
            ? "مطوّر واجهات أمامية (Front-End Developer) أمتلك خبرة في تطوير وبناء واجهات المواقع باستخدام React.js، بالإضافة إلى إتقان HTML وCSS وBootstrap. كما أستخدم مكتبة Redux لإدارة الحالة بكفاءة في التطبيقات المعقدة. أركز على تقديم تصاميم متجاوبة وتجربة مستخدم احترافية."
            : "I am a Front-End Developer experienced in building user interfaces using React.js, and proficient in HTML, CSS, and Bootstrap. I also use Redux for efficient state management in complex apps. I focus on responsive design and delivering a professional user experience."}
        </p>
      </Container>
    </section>
  );
}
