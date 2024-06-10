import React from "react";
import { scrollToSection } from "../../utils/scrollToSection.js";

export default function Paperwork() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section
      className={
        "paperwork-section bg-[#DAB2ED] flex flex-col justify-center items-center py-[100px] px-[40px] 600px:py-[60px] 600px:px-[16px]"
      }
      id="paperwork-section"
    >
      <h1 className="font-[800] text-[80px] leading-[80px] uppercase text-center 600px:text-[32px] 600px:leading-[35.2px]">
        Paperwork and formalities
      </h1>
      <p className="mt-[20px] font-500 text-[24px] leading-[31.2px] text-center max-w-[900px] 600px:txt-[20px] 600px:leading-[26px] 600px:mt-[16px]">
        We do all that boring stuff, so you don't have to. Life is better
        without stressing about taxes and legal issues. We'll take it off your
        shoulders by organizing everything you need to focus on your work
        without any distractions.
      </p>
      <button
        className="btn-primary mt-[40px]"
        onClick={(e) => handleScroll(e, "contact-section")}
      >
        Join us
      </button>
    </section>
  );
}
