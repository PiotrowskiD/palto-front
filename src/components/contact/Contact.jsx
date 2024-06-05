import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section className={"contact-section relative"}>
      <div className="left max-w-[430px] relative z-[2] 600px:max-w-[100%] 600px:w-full">
        <h1>Let&apos;s talk.</h1>
        <ContactForm />
      </div>
      <div className="right max-h-[100%] absolute right-0 z-[1] 600px:top-0">
        <svg
          viewBox="0 0 944 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"h-[100vh] 996px:h-[60vh] 600px:h-[306px]"}
        >
          <path
            d="M864.627 330.31C864.539 330.748 864.651 331.202 864.931 331.548C865.212 331.895 865.632 332.099 866.078 332.105C1006.01 333.886 1132.78 372.79 1226.22 436.446C1319.66 500.1 1379.69 588.435 1386.44 689.126C1393.69 797.353 1338.03 899.654 1241.88 977.552C1145.74 1055.45 1009.2 1108.84 855.047 1119.17C700.899 1129.5 558.455 1094.81 452.772 1030.44C347.085 966.074 278.274 872.116 271.02 763.889C267.38 709.586 279.574 656.794 304.765 607.824C305.033 607.303 304.973 606.672 304.61 606.211C304.248 605.75 303.65 605.542 303.079 605.68C231.944 622.843 164.672 624.101 111.859 611.303C59.0118 598.497 20.9175 571.705 7.53458 532.987C-4.05903 499.445 4.45569 461.503 28.8319 424.174C53.2036 386.852 93.3395 350.307 144.6 319.742C145.17 319.402 145.449 318.729 145.286 318.086C138.561 291.504 136.255 263.888 138.971 235.826C154.569 74.6927 330.177 -40.6865 531.861 -21.1631C733.546 -1.63973 883.762 145.28 868.164 306.413C867.382 314.499 866.197 322.469 864.627 330.31ZM559.4 401.22C579.964 403.21 599.561 393.536 614.619 376.548C629.68 359.56 640.291 335.178 642.976 307.439C645.661 279.701 639.924 253.736 628.402 234.174C616.88 214.614 599.503 201.361 578.939 199.37C558.375 197.379 538.778 207.054 523.719 224.041C508.659 241.03 498.047 265.411 495.362 293.15C492.677 320.889 498.415 346.853 509.937 366.415C521.458 385.975 538.835 399.229 559.4 401.22Z"
            stroke="#E9EB76"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
