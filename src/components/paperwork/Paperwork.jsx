import React from "react";
import { scrollToSection } from "../../utils/scrollToSection.js";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function Paperwork() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const { languageData } = useLanguage();

  return (
    <section
      className={
        "paperwork-section bg-[#DAB2ED] flex flex-col justify-center items-center py-[100px] px-[40px] 600px:py-[60px] 600px:px-[16px]"
      }
      id="paperwork-section"
    >
      <h1 className="font-[800] text-[80px] leading-[80px] uppercase text-center 600px:text-[32px] 600px:leading-[35.2px]">
        {languageData.paperwork.title}
      </h1>
      <p className="mt-[20px] font-500 text-[24px] leading-[31.2px] text-center max-w-[900px] 600px:txt-[20px] 600px:leading-[26px] 600px:mt-[16px]">
        {languageData.paperwork.description}
      </p>
      <button
        className="btn-primary mt-[40px]"
        onClick={(e) => handleScroll(e, "contact-section")}
      >
        {languageData.paperwork.button}
      </button>
    </section>
  );
}
