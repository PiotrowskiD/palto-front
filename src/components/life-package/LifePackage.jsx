import React from "react";

import Duck from "../../assets/life/duck.png";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function LifePackage() {
  const { languageData } = useLanguage();

  return (
    <section
      className={
        "life-package h-[100vh] bg-[#DAB2ED] mt-[120px] flex justify-center items-center px-[40px] 600px:h-auto 600px:py-[116px] 600px:px-[16px] 600px:mt-[60px]"
      }
    >
      <h1>
        {languageData.life.h1} <img src={Duck} alt="" /> <br />
        <span
          dangerouslySetInnerHTML={{ __html: languageData.life.span }}
        ></span>
      </h1>
    </section>
  );
}
