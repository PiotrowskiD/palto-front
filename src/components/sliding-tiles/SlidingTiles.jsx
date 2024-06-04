import React from "react";

import Img1 from "../../assets/sliding-tiles/1.png";
import Img2 from "../../assets/sliding-tiles/2.png";
import Img3 from "../../assets/sliding-tiles/3.png";
import Img4 from "../../assets/sliding-tiles/4.png";

export default function SlidingTiles() {
  return (
    <section className="sliding-tiles px-[40px] h-[100vh] flex items-center justify-between 1280px:h-auto 1280px:py-[187.5px] 1280px:justify-center 600px:py-[60px] 600px:px-[16px]">
      <div className="tiles-wrapper grid grid-cols-4 gap-[40px] justify-between 1280px:grid-cols-2 600px:grid-cols-1">
        <div className="tile">
          <img src={Img1} alt="" />
          <h3>Work wisely to earn more</h3>
          <p>
            Save time and energy and pass all the hassle work to a hired
            specialist so you can focus on what matters. Palto will deliver you
            proven support experienced in working with freelancers. Hire them
            for any time you need without the risk of laying off if the project
            ends.
          </p>
        </div>
        <div className="tile">
          <img src={Img2} alt="" />
          <h3>Rent-a-dev</h3>
          <p>
            The additional hands that work for you. Gain immediate access to
            proficient assistance, preventing any downtime. Rent a specialist
            who will handle the AI area for you, while you can deal with other
            things. No onboarding, no training, or ongoing developments.
          </p>
        </div>
        <div className="tile">
          <img src={Img3} alt="" />
          <h3>Scale up</h3>
          <p>
            You can take on more projects without the fear of not getting the
            work done. While your support does 80% of the work, you focus on the
            most important 20% unleashing your full potential.
          </p>
        </div>
        <div className="tile">
          <img src={Img4} alt="" />
          <h3>Save money</h3>
          <p>
            Keep your project budget in line by only paying for the work done,
            not the expenses associated with employee recruitment and
            management.
          </p>
        </div>
      </div>
    </section>
  );
}
