import React from "react";

import ConsultingImg from "../../assets/consulting/consulting.webp";

export default function Consulting() {
  return (
    <section className={"consulting-section"}>
      <img src={ConsultingImg} alt="" />
      <div className="text-wrapper">
        <div className="text">
          <h1>CONSULTING ON DEMAND</h1>
          <p>
            Regardless of whether you are new to this business or have been a
            freelancer for some time, you can benefit from hiring our
            freelancing consultants. They will advise you on all
            business-related aspects of the game:
          </p>
          <ul>
            <li>
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16.4V14.1143H12.0816L9.36055 11.3932L10.732 10L16 15.268L10.732 20.5361L9.36055 19.1429L12.1034 16.4H0Z"
                  fill="#131313"
                />
              </svg>
              How to advertise your services to find a new client.
            </li>
            <li>
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16.4V14.1143H12.0816L9.36055 11.3932L10.732 10L16 15.268L10.732 20.5361L9.36055 19.1429L12.1034 16.4H0Z"
                  fill="#131313"
                />
              </svg>
              How to prepare a perfect sales offer that won’t be refused.
            </li>
            <li>
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16.4V14.1143H12.0816L9.36055 11.3932L10.732 10L16 15.268L10.732 20.5361L9.36055 19.1429L12.1034 16.4H0Z"
                  fill="#131313"
                />
              </svg>
              How to negotiate the contract to secure your business.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
