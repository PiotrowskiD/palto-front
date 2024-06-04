import React from "react";

export default function Heroarea() {
  return (
    <div className={"heroarea-wrapper flex items-end"}>
      <div className="text flex flex-col justify-center items-center mb-[80px] 996px:px-[16px]">
        <h1
          className={
            "font-[800] text-[100px] text-center leading-[95px] tracking-[-3px] uppercase text-[#FEFDFB] 996px:text-[60px] 996px:leading-[60px] 600px:text-[36px] 600px:leading-[36px]"
          }
        >
          We make AI freelancing easy and stress-free.
        </h1>
        <p
          className={
            "font-[500] text-[32px] text-[#FEFDFB] mt-[16px] 996px:text-center 600px:text-[24px] 600px:leading-[31.2px]"
          }
        >
          Focus on getting the work done and start living a balanced life.
        </p>
        <button className="btn-primary mt-[40px] 600px:mt-[48px]">
          Start living!
        </button>
      </div>
    </div>
  );
}
