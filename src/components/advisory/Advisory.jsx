import React from "react";

import AdvisoryImg from "../../assets/advisory/advisory.webp";

export default function Advisory() {
  return (
    <section className="advisory-section h-[100vh] flex justify-between items-center">
      <div className="tile-wrapper">
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
      <img className={"max-h-[100%]"} src={AdvisoryImg} alt="" />
    </section>
  );
}
