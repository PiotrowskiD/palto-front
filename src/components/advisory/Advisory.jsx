import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AdvisoryImg from "../../assets/advisory/advisory.webp";
import AdvisoryMobileImg from "../../assets/advisory/advisory-mobile.webp";

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

  return (
    <div className="relative h-[300vh]" ref={targetRef}>
      <div className="sticky top-0 h-screen flex justify-center items-center">
        <section className="advisory-section h-[100vh] flex justify-between items-center 1100px:h-auto 1100px:flex-col-reverse 1100px:pb-[60px]">
          <div className="tile-wrapper 1100px:mt-[60px] relative flex flex-col items-center">
            <motion.div
              className="tile absolute"
              style={{
                opacity: fadeOutFirstTile,
                y: moveUpFirstTile,
              }}
            >
              <h3>Legal advisory</h3>
              <p>
                Palto lawyers will handle all legal aspects of your freelancing.
                Experienced in IT contracts, we ensure you’re fully protected
                and understand your agreements. Our experts streamline the
                negotiation process for efficiency. Whether you’re new or
                seasoned, we’ll create or analyze contracts to safeguard your
                interests.
              </p>
            </motion.div>
            <motion.div
              className="tile"
              style={{
                opacity: fadeInSecondTile,
                y: moveUpSecondTile,
              }}
            >
              <h3>Accounting Services</h3>
              <p>
                We'll handle all aspects of your accounting processes, from
                document submission through electronic processing and approval,
                to complete financial and tax reports. <br /> <br />
                Palto tax advisory: we follow and analyze all the changes in tax
                legislation and its effects in the long term. Life is more
                beautiful when you can sleep peacefully and have a little extra
                in your pocket. Let us help you optimize your taxes to achieve
                just that.
              </p>
            </motion.div>
          </div>
          <motion.img
            className={"max-h-[100%] 1100px:hidden"}
            src={AdvisoryImg}
            alt=""
            style={{
              x: imageSlide,
            }}
          />
          <img
            className={"hidden 1100px:block"}
            src={AdvisoryMobileImg}
            alt=""
          />
        </section>
      </div>
    </div>
  );
}
