import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AdvisoryImg from "../../assets/advisory/advisory.webp";
import AdvisoryMobileImg from "../../assets/advisory/advisory-mobile.webp";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function Advisory() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const imageSlide = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);

  // Animations for the first tile
  const fadeOutFirstTile = useTransform(scrollYProgress, [0.35, 0.6], [1, 0]);
  const moveUpFirstTile = useTransform(scrollYProgress, [0.35, 0.6], [0, -320]);

  // Animations for the second tile
  const fadeInSecondTile = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const moveUpSecondTile = useTransform(scrollYProgress, [0.5, 0.65], [320, 0]);

  // Animations for mobile
  const fadeInFirstTileMobile = useTransform(
    scrollYProgress,
    [0.25, 0.4],
    [0, 1],
  );
  const fadeInSecondTileMobile = useTransform(
    scrollYProgress,
    [0.5, 0.65],
    [0, 1],
  );

  const { languageData } = useLanguage();

  return (
    <>
      <img className={"hidden 1280px:block"} src={AdvisoryMobileImg} alt="" />
      <div className="relative h-[300vh] 600px:mt-[74px]" ref={targetRef}>
        <div className="sticky top-0 h-screen flex justify-center items-center">
          <section className="advisory-section h-[100vh] flex justify-between items-center 1280px:h-auto 1280px:flex-col-reverse 1280px:pb-[60px] 600px:hidden">
            <div className="tile-wrapper 1280px:mt-[60px] relative flex flex-col items-center">
              <motion.div
                className="tile absolute"
                style={{
                  opacity: fadeOutFirstTile,
                  y: moveUpFirstTile,
                }}
              >
                <h3>{languageData.advisory.tile1.title}</h3>
                <p>{languageData.advisory.tile1.description}</p>
              </motion.div>
              <motion.div
                className="tile"
                style={{
                  opacity: fadeInSecondTile,
                  y: moveUpSecondTile,
                }}
              >
                <h3>{languageData.advisory.tile2.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: languageData.advisory.tile2.description,
                  }}
                ></p>
              </motion.div>
            </div>
            <motion.img
              className={"max-h-[100%] 1280px:hidden"}
              src={AdvisoryImg}
              alt=""
              style={{
                x: imageSlide,
              }}
            />
          </section>

          <section className="advisory-section hidden 600px:flex h-[100vh] justify-between items-center 1280px:h-auto 1280px:flex-col-reverse 1280px:pb-[60px]">
            <div className="tile-wrapper 1280px:mt-[60px] relative flex flex-col gap-[20px] items-center">
              <motion.div
                className="tile"
                style={{
                  opacity: fadeInFirstTileMobile,
                }}
              >
                <h3>{languageData.advisory.tile1.title}</h3>
                <p>{languageData.advisory.tile1.description}</p>
              </motion.div>
              <motion.div
                className="tile"
                style={{
                  opacity: fadeInSecondTileMobile,
                }}
              >
                <h3>{languageData.advisory.tile2.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: languageData.advisory.tile2.description,
                  }}
                ></p>
              </motion.div>
            </div>
            <motion.img
              className={"max-h-[100%] 1280px:hidden"}
              src={AdvisoryImg}
              alt=""
              style={{
                x: imageSlide,
              }}
            />
          </section>
        </div>
      </div>
    </>
  );
}
