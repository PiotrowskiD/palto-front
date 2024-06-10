import React from "react";

import StrugglingImg from "../../assets/struggling/struggling.webp";

export default function Struggling() {
  return (
    <section className={"struggling-section"}>
      <img src={StrugglingImg} alt="" />
      <div className="text-wrapper">
        <div className="text">
          <h1 className={"uppercase"}>
            Struggling with a tough part of a project?
          </h1>
          <p>
            Our senior consultants are here to support you in solving an
            unsolvable problem. They can also help you evaluate your projects in
            terms of time, cost, and risk.
          </p>
        </div>
      </div>
    </section>
  );
}
