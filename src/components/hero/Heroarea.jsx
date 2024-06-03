import React from "react";

export default function Heroarea() {
  return (
    <div className={"heroarea-wrapper flex items-end"}>
      <div className="text flex flex-col justify-center items-center mb-[80px]">
        <h1
          className={
            "font-extrabold text-[100px] text-center leading-[95px] tracking-[-3px] uppercase text-[#FEFDFB]"
          }
        >
          We make AI freelancing easy and stress-free.
        </h1>
        <p className={"font-500 text-[32px] text-[#FEFDFB] mt-[16px]"}>
          Focus on getting the work done and start living a balanced life.
        </p>
        <button className="btn-primary mt-[40px]">Start living!</button>
      </div>
    </div>
  );
}
