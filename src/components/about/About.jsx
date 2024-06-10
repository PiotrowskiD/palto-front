import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image1 from "../../assets/about/1.png";
import Image2 from "../../assets/about/2.png";
import Image3 from "../../assets/about/3.png";
import Image4 from "../../assets/about/4.png";
import { scrollToSection } from "../../utils/scrollToSection.js";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function About() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

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

  const { languageData } = useLanguage();

  return (
    <section className={"about-section"} id={"about-section"}>
      <div className="header-wrapper flex flex-col items-center gap-[40px] pt-[120px] 600px:gap-[16px] 600px:pt-[60px] 600px:px-[16px]">
        <motion.h1
          className="font-[800] text-[80px] uppercase leading-[80px] text-center 996px:text-[60px] 996px:leading-[60px] 600px:text-[36px] 600px:leading-[34.2px]"
          ref={targetRef}
          style={{ y: h1Y, opacity: h1Opacity }}
          dangerouslySetInnerHTML={{ __html: languageData.about.h1 }}
        ></motion.h1>
        <motion.p
          className={
            "font-500 text-[32px] leading-[41.6px] text-[#343331] text-center 600px:text-[20px] 600px:leading-[26px]"
          }
          style={{ y: pY, opacity: pOpacity }}
          dangerouslySetInnerHTML={{ __html: languageData.about.p }}
        ></motion.p>
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
            <h3>{languageData.about.tile1.title}</h3>
            <p>{languageData.about.tile1.description}</p>
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
            <h3>{languageData.about.tile2.title}</h3>
            <p>{languageData.about.tile2.description}</p>
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
            <h3>{languageData.about.tile3.title}</h3>
            <p>{languageData.about.tile3.description}</p>
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
            <h3>{languageData.about.tile4.title}</h3>
            <p>{languageData.about.tile4.description}</p>
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
          dangerouslySetInnerHTML={{
            __html: languageData.about.description,
          }}
        ></p>
        <button
          className="btn-primary"
          onClick={(e) => handleScroll(e, "contact-section")}
        >
          {languageData.about.contact}
        </button>
      </motion.div>
    </section>
  );
}
