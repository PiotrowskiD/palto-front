import React from "react";

import Image1 from "../../assets/about/1.png";
import Image2 from "../../assets/about/2.png";
import Image3 from "../../assets/about/3.png";
import Image4 from "../../assets/about/4.png";

export default function About() {
  return (
    <section className={"about-section"}>
      <div className="header-wrapper flex flex-col items-center gap-[40px] mt-[120px]">
        <h1 className="font-extrabold text-[80px] uppercase leading-[80px] text-center">
          We understand <br />
          your dilemmas
        </h1>
        <p
          className={
            "font-500 text-[32px] leading-[41.6px] text-[#343331] text-center"
          }
        >
          A full-time job and freelancing have their <br />
          pros but also have cons.
        </p>
      </div>
      <div className="tiles-wrapper">
        <div className="tile">
          <img src={Image1} alt="" />
          <div className="text">
            <h3>Freelance dream</h3>
            <p>
              In a corporation, you get paid every month, but get stuck in
              endless and meaningless meetings. Or stay in the office after
              hours trying to do what you were hired to do. You start dreaming
              of going freelance.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={Image2} alt="" />
          <div className="text">
            <h3>Freedom vs office</h3>
            <p>
              In freelancing, however, you seem to feel more freedom but have to
              deal with a shitload of things alone. Then you dream of returning
              to the office. Sounds like insanity.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={Image3} alt="" />
          <div className="text">
            <h3>44% of Burnouts</h3>
            <p>
              Almost 44% of full-time professionals experience burnout,
              affecting productivity, work-life balance, and well-being,
              potentially leading to depression and physical issues. Freelancers
              also face stress from fears of not securing projects, handling
              them, or facing contractual penalties.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={Image4} alt="" />
          <div className="text">
            <h3>We got you covered</h3>
            <p>
              Thanks to us, you can finally solve these dilemmas. We will help
              you to redefine your freelance work and guide you through the
              process. No matter if you are a seasoned contractor or still
              hesitant about making that first step. We make freelancing a
              breeze.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-wrapper flex flex-col items-center mt-[80px] gap-[40px]">
        <p className={"font-500 text-[32px] leading-[41.6px] text-center"}>
          We'll provide you with the best care to <br />
          unlock your true potential.
        </p>
        <button className="btn-primary">Contact us</button>
      </div>
    </section>
  );
}
