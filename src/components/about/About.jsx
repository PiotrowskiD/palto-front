import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image1 from "../../assets/about/1.png";
import Image2 from "../../assets/about/2.png";
import Image3 from "../../assets/about/3.png";
import Image4 from "../../assets/about/4.png";

export default function About() {
  // Title animation

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const h1Y = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  const h1Opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const pY = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
  const pOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Contact animation

  const refContact = useRef(null);

  const { scrollYProgress: contactProgress } = useScroll({
    target: refContact,
    offset: ["start end", "end start"],
  });

  const contactOpacity = useTransform(contactProgress, [0, 0.3], [0, 1]);

  // Tiles animation

  const refTile1 = useRef(null);
  const refTile2 = useRef(null);
  const refTile3 = useRef(null);
  const refTile4 = useRef(null);

  const { scrollYProgress: tile1Progress } = useScroll({
    target: refTile1,
    offset: ["start end", "end start"],
  });

  const tile1Y = useTransform(tile1Progress, [0, 0.3], ["50%", "0%"]);
  const tile1Opacity = useTransform(tile1Progress, [0, 0.3], [0, 1]);

  const { scrollYProgress: tile2Progress } = useScroll({
    target: refTile2,
    offset: ["start end", "end start"],
  });

  const tile2Y = useTransform(tile2Progress, [0, 0.5], ["100%", "0%"]);
  const tile2Opacity = useTransform(tile2Progress, [0, 0.4], [0.7, 1]);

  const tile3Y = useTransform(tile1Progress, [0, 0.7], ["30%", "0%"]);
  const tile3Opacity = useTransform(tile1Progress, [0, 0.3], [0, 1]);

  const tile4Y = useTransform(tile2Progress, [0, 0.7], ["80%", "0%"]);
  const tile4Opacity = useTransform(tile2Progress, [0, 0.4], [0.7, 1]);

  return (
    <section className={"about-section"} id={"about-section"}>
      <div className="header-wrapper flex flex-col items-center gap-[40px] pt-[120px] 600px:gap-[16px] 600px:pt-[60px] 600px:px-[16px]">
        <motion.h1
          className="font-[800] text-[80px] uppercase leading-[80px] text-center 996px:text-[60px] 996px:leading-[60px] 600px:text-[36px] 600px:leading-[34.2px]"
          ref={targetRef}
          style={{ y: h1Y, opacity: h1Opacity }}
        >
          We understand <br />
          your dilemmas
        </motion.h1>
        <motion.p
          className={
            "font-500 text-[32px] leading-[41.6px] text-[#343331] text-center 600px:text-[20px] 600px:leading-[26px]"
          }
          style={{ y: pY, opacity: pOpacity }}
        >
          A full-time job and freelancing have their <br />
          pros but also have cons.
        </motion.p>
      </div>
      <div className="tiles-wrapper">
        <motion.div
          className="tile"
          ref={refTile1}
          style={{ y: tile1Y, opacity: tile1Opacity }}
        >
          <div className="image-wrapper">
            <img src={Image1} alt="" />
          </div>
          <div className="text">
            <h3>Freelance dream</h3>
            <p>
              In a corporation, you get paid every month, but get stuck in
              endless and meaningless meetings. Or stay in the office after
              hours trying to do what you were hired to do. You start dreaming
              of going freelance.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="tile"
          ref={refTile2}
          style={{ y: tile2Y, opacity: tile2Opacity }}
        >
          <div className="image-wrapper">
            <img src={Image2} alt="" />
          </div>
          <div className="text">
            <h3>Freedom vs office</h3>
            <p>
              In freelancing, however, you seem to feel more freedom but have to
              deal with a shitload of things alone. Then you dream of returning
              to the office. Sounds like insanity.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="tile"
          ref={refTile3}
          style={{ y: tile3Y, opacity: tile3Opacity }}
        >
          <div className="image-wrapper">
            <img src={Image3} alt="" />
          </div>
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
        </motion.div>
        <motion.div
          className="tile"
          ref={refTile4}
          style={{ y: tile4Y, opacity: tile4Opacity }}
        >
          <div className="image-wrapper">
            <img src={Image4} alt="" />
          </div>
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
        </motion.div>
      </div>
      <motion.div
        className="contact-wrapper flex flex-col items-center mt-[80px] gap-[40px] 600px:px-[16px]"
        ref={refContact}
        style={{ opacity: contactOpacity }}
      >
        <p
          className={
            "font-[500] text-[32px] leading-[41.6px] text-center 600px:text-[20px] 600px:leading-[26px]"
          }
        >
          We'll provide you with the best care to{" "}
          <br className={"600px:hidden"} />
          unlock your true potential.
        </p>
        <button className="btn-primary">Contact us</button>
      </motion.div>
    </section>
  );
}
