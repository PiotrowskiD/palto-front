import Img1 from "../../assets/sliding-tiles/1.png";
import Img2 from "../../assets/sliding-tiles/2.png";
import Img3 from "../../assets/sliding-tiles/3.png";
import Img4 from "../../assets/sliding-tiles/4.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SlidingTiles() {
  const targetRef = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const descriptionCenter = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "-50%"],
  );
  const descriptionScale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.8]);
  const descriptionOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);

  const descriptionCenterMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "-50%"],
  );
  const descriptionScaleMobile = useTransform(
    scrollYProgress,
    [0.2, 0.35],
    [1, 0.8],
  );
  const descriptionOpacityMobile = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    [1, 0],
  );

  const tile1Slide = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["100vw", "0vw"],
  );

  const tile2Slide = useTransform(
    scrollYProgress,
    [0.34, 0.63],
    ["100vw", "0vw"],
  );

  const tile3Slide = useTransform(
    scrollYProgress,
    [0.38, 0.66],
    ["100vw", "0vw"],
  );

  const tile4Slide = useTransform(
    scrollYProgress,
    [0.42, 0.69],
    ["100vw", "0vw"],
  );

  // Tablet animations

  const tilesCenterTablet = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "-50%"],
  );

  const tile1SlideXTablet = useTransform(
    scrollYProgress,
    [0.32, 0.49],
    ["-100vw", "0vw"],
  );

  const tile2SlideXTablet = useTransform(
    scrollYProgress,
    [0.28, 0.45],
    ["-100vw", "0vw"],
  );

  const tile3SlideXTablet = useTransform(
    scrollYProgress,
    [0.6, 0.77],
    ["100vw", "0vw"],
  );

  const tile4SlideXTablet = useTransform(
    scrollYProgress,
    [0.64, 0.81],
    ["100vw", "0vw"],
  );

  const tile1SlideYTablet = useTransform(
    scrollYProgress,
    [0.53, 0.7],
    ["0", "-100vw"],
  );

  // Mobile animations

  const descriptionSlideMobile = useTransform(
    scrollYProgress,
    [0.22, 0.3],
    ["0vw", "-100vw"],
  );

  const tile1SlideXMobile = useTransform(
    scrollYProgress,
    [0.24, 0.32],
    ["-100vw", "0vw"],
  );

  const tile2SlideXMobile = useTransform(
    scrollYProgress,
    [0.38, 0.46],
    ["100vw", "0vw"],
  );

  const tile3SlideXMobile = useTransform(
    scrollYProgress,
    [0.54, 0.62],
    ["-100vw", "0vw"],
  );

  const tile4SlideXMobile = useTransform(
    scrollYProgress,
    [0.7, 0.78],
    ["100vw", "0vw"],
  );

  const tile1SlideYMobile = useTransform(
    scrollYProgress,
    [0.34, 0.42],
    ["0vw", "-120vh"],
  );

  const tile2SlideYMobile = useTransform(
    scrollYProgress,
    [0.48, 0.56],
    ["0vh", "-100vh"],
  );

  const tile3SlideYMobile = useTransform(
    scrollYProgress,
    [0.64, 0.72],
    ["0vh", "-100vh"],
  );

  return (
    <div
      className="relative h-[300vh] 1280px:h-[600vh] 600px:h-[400vh]"
      ref={targetRef}
    >
      <div className="sticky top-0 h-screen">
        <section className="sliding-tiles 1280px:hidden relative px-[40px] h-[100vh] flex items-center justify-between 1280px:h-auto 1280px:py-[187.5px] 1280px:justify-center 600px:py-[60px] 600px:px-[16px]">
          <motion.div
            className="description-wrapper absolute z-[-1] max-w-[586px] top-[50%] left-[197px] 1800px:left-[40px] translate-y-[-50%]"
            style={{
              scale: descriptionScale,
              opacity: descriptionOpacity,
              y: descriptionCenter,
            }}
          >
            <h2 className={"uppercase text-[80px] leading-[80px] font-[800]"}>
              AI Engineer outstaffing
            </h2>
            <p className={"mt-[32px] font-[500] text-[24px] leading-[31.2px]"}>
              We've been doing AI since before the wheel was invented. From now
              on, your projects will be under the care of experts who know this
              field like the back of their hands.
            </p>
          </motion.div>
          <div className="tiles-wrapper grid grid-cols-4 gap-[40px] justify-between 1280px:grid-cols-2 600px:grid-cols-1">
            <motion.div
              className="tile"
              style={{
                x: tile1Slide,
              }}
            >
              <img src={Img1} alt="" />
              <h3>Work wisely to earn more</h3>
              <p>
                Save time and energy and pass all the hassle work to a hired
                specialist so you can focus on what matters. Palto will deliver
                you proven support experienced in working with freelancers. Hire
                them for any time you need without the risk of laying off if the
                project ends.
              </p>
            </motion.div>
            <motion.div
              className="tile"
              style={{
                x: tile2Slide,
              }}
            >
              <img src={Img2} alt="" />
              <h3>Rent-a-dev</h3>
              <p>
                The additional hands that work for you. Gain immediate access to
                proficient assistance, preventing any downtime. Rent a
                specialist who will handle the AI area for you, while you can
                deal with other things. No onboarding, no training, or ongoing
                developments.
              </p>
            </motion.div>
            <motion.div
              className="tile"
              style={{
                x: tile3Slide,
              }}
            >
              <img src={Img3} alt="" />
              <h3>Scale up</h3>
              <p>
                You can take on more projects without the fear of not getting
                the work done. While your support does 80% of the work, you
                focus on the most important 20% unleashing your full potential.
              </p>
            </motion.div>
            <motion.div
              className="tile"
              style={{
                x: tile4Slide,
              }}
            >
              <img src={Img4} alt="" />
              <h3>Save money</h3>
              <p>
                Keep your project budget in line by only paying for the work
                done, not the expenses associated with employee recruitment and
                management.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="sliding-tiles h-[100vh] hidden 1280px:flex 600px:hidden relative px-[40px] items-center justify-between 1280px:justify-center 600px:py-[60px] 600px:px-[16px]">
          <motion.div
            className="description-wrapper absolute z-[-1] max-w-[586px] top-[50%] left-[50%] 1800px:left-[50%] translate-y-[-50%] text-center"
            style={
              isSmallScreen
                ? {
                    scale: descriptionScaleMobile,
                    opacity: descriptionOpacityMobile,
                    y: descriptionCenterMobile,
                    x: descriptionCenterMobile,
                  }
                : {
                    scale: descriptionScale,
                    opacity: descriptionOpacity,
                    y: descriptionCenter,
                  }
            }
          >
            <h2 className={"uppercase text-[80px] leading-[80px] font-[800]"}>
              AI Engineer outstaffing
            </h2>
            <p className={"mt-[32px] font-[500] text-[24px] leading-[31.2px]"}>
              We've been doing AI since before the wheel was invented. From now
              on, your projects will be under the care of experts who know this
              field like the back of their hands.
            </p>
          </motion.div>
          <div className="tiles-wrapper ">
            <motion.div
              className="upper-tiles grid grid-cols-2 absolute px-[40px] w-[100%] gap-[40px] top-[50%] left-[0]"
              style={{
                y: tilesCenterTablet,
              }}
            >
              <motion.div
                className="tile"
                style={{
                  x: tile1SlideXTablet,
                  y: tile1SlideYTablet,
                }}
              >
                <img src={Img1} alt="" />
                <h3>Work wisely to earn more</h3>
                <p>
                  Save time and energy and pass all the hassle work to a hired
                  specialist so you can focus on what matters. Palto will
                  deliver you proven support experienced in working with
                  freelancers. Hire them for any time you need without the risk
                  of laying off if the project ends.
                </p>
              </motion.div>
              <motion.div
                className="tile"
                style={{
                  x: tile2SlideXTablet,
                  y: tile1SlideYTablet,
                }}
              >
                <img src={Img2} alt="" />
                <h3>Rent-a-dev</h3>
                <p>
                  The additional hands that work for you. Gain immediate access
                  to proficient assistance, preventing any downtime. Rent a
                  specialist who will handle the AI area for you, while you can
                  deal with other things. No onboarding, no training, or ongoing
                  developments.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="lower-tiles grid grid-cols-2 absolute px-[40px] gap-[40px] w-[100%] top-[] left-[0]"
              style={{
                y: tilesCenterTablet,
              }}
            >
              <motion.div
                className="tile"
                style={{
                  x: tile3SlideXTablet,
                }}
              >
                <img src={Img3} alt="" />
                <h3>Scale up</h3>
                <p>
                  You can take on more projects without the fear of not getting
                  the work done. While your support does 80% of the work, you
                  focus on the most important 20% unleashing your full
                  potential.
                </p>
              </motion.div>
              <motion.div
                className="tile"
                style={{
                  x: tile4SlideXTablet,
                }}
              >
                <img src={Img4} alt="" />
                <h3>Save money</h3>
                <p>
                  Keep your project budget in line by only paying for the work
                  done, not the expenses associated with employee recruitment
                  and management.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="sliding-tiles h-[100vh] hidden 600px:block relative px-[40px] items-center justify-between 1280px:justify-center 600px:py-[60px] 600px:px-[16px]">
          <motion.div
            className="description-wrapper absolute z-[-1] max-w-[586px] top-[18%] left-[50%] 1800px:left-[50%] translate-y-[-50%] text-center"
            style={{
              x: descriptionCenterMobile,
              y: descriptionSlideMobile,
            }}
          >
            <h2 className={"uppercase text-[36px] leading-[34.2px] font-[800]"}>
              AI Engineer outstaffing
            </h2>
            <p className={"mt-[16px] font-[500] text-[20px] leading-[26px]"}>
              We've been doing AI since before the wheel was invented. From now
              on, your projects will be under the care of experts who know this
              field like the back of their hands.
            </p>
          </motion.div>
          <div className="tiles-wrapper">
            <motion.div
              className="tile absolute px-[16px] top-[17%]"
              style={{
                x: tile1SlideXMobile,
                y: tile1SlideYMobile,
              }}
            >
              <img src={Img1} alt="" />
              <h3>Work wisely to earn more</h3>
              <p>
                Save time and energy and pass all the hassle work to a hired
                specialist so you can focus on what matters. Palto will deliver
                you proven support experienced in working with freelancers. Hire
                them for any time you need without the risk of laying off if the
                project ends.
              </p>
            </motion.div>
            <motion.div
              className="tile absolute px-[16px] top-[17%]"
              style={{
                x: tile2SlideXMobile,
                y: tile2SlideYMobile,
              }}
            >
              <img src={Img2} alt="" />
              <h3>Rent-a-dev</h3>
              <p>
                The additional hands that work for you. Gain immediate access to
                proficient assistance, preventing any downtime. Rent a
                specialist who will handle the AI area for you, while you can
                deal with other things. No onboarding, no training, or ongoing
                developments.
              </p>
            </motion.div>
            <motion.div
              className="tile absolute px-[16px] top-[17%]"
              style={{
                x: tile3SlideXMobile,
                y: tile3SlideYMobile,
              }}
            >
              <img src={Img3} alt="" />
              <h3>Scale up</h3>
              <p>
                You can take on more projects without the fear of not getting
                the work done. While your support does 80% of the work, you
                focus on the most important 20% unleashing your full potential.
              </p>
            </motion.div>
            <motion.div
              className="tile absolute px-[16px] top-[17%]"
              style={{
                x: tile4SlideXMobile,
              }}
            >
              <img src={Img4} alt="" />
              <h3>Save money</h3>
              <p>
                Keep your project budget in line by only paying for the work
                done, not the expenses associated with employee recruitment and
                management.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
