import React from "react";

import AdvisoryImg from "../../assets/advisory/advisory.webp";
import AdvisoryMobileImg from "../../assets/advisory/advisory-mobile.webp";

export default function Advisory() {
  return (
    <section className="advisory-section h-[100vh] flex justify-between items-center 1100px:h-auto 1100px:flex-col-reverse 1100px:pb-[60px]">
      <div className="tile-wrapper 1100px:mt-[60px]">
        <div className="tile">
          <h3>Legal advisory</h3>
          <p>
            Palto lawyers will handle all legal aspects of your freelancing.
            Experienced in IT contracts, we ensure you’re fully protected and
            understand your agreements. Our experts streamline the negotiation
            process for efficiency. Whether you’re new or seasoned, we’ll create
            or analyze contracts to safeguard your interests.
          </p>
        </div>
      </div>
      <img className={"max-h-[100%] 1100px:hidden"} src={AdvisoryImg} alt="" />
      <img className={"hidden 1100px:block"} src={AdvisoryMobileImg} alt="" />
    </section>
  );
}
