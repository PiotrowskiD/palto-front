import React from "react";

export default function Paperwork() {
  return (
    <section
      className={
        "paperwork-section bg-[#DAB2ED] flex flex-col justify-center items-center py-[100px]"
      }
    >
      <h1 className="font-extrabold text-[80px] leading-[80px] uppercase">
        Paperwork and formalities
      </h1>
      <p className="mt-[20px] font-500 text-[24px] leading-[31.2px] text-center max-w-[900px]">
        We do all that boring stuff, so you don't have to. Life is better
        without stressing about taxes and legal issues. We'll take it off your
        shoulders by organizing everything you need to focus on your work
        without any distractions.
      </p>
      <button className="btn-primary mt-[40px]">Join us</button>
    </section>
  );
}
