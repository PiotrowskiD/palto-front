import React from "react";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section className={"contact-section"}>
      <div className="left max-w-[430px]">
        <h1>Let's talk.</h1>
        <ContactForm />
      </div>
      <div className="right"></div>
    </section>
  );
}
