import React from "react";

import Duck from "../../assets/life/duck.png";

export default function LifePackage() {
  return (
    <section
      className={
        "life-package h-[100vh] bg-[#DAB2ED] mt-[120px] flex justify-center items-center px-[40px] 600px:h-auto 600px:py-[116px] 600px:px-[16px]"
      }
    >
      <h1>
        GOOD-LIFE PACKAGE <img src={Duck} alt="" /> <br />
        <span>
          THAT TAKES FREELANCING TO <br />A COMPLETELY NEW LEVEL
        </span>
      </h1>
    </section>
  );
}
