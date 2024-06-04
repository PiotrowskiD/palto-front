import { useEffect } from "react";

export default function MobileMenu({
  isMobileMenuToggled,
  handleMobileMenuToggle,
}) {
  return (
    <>
      <div
        className={`mobile-background ${isMobileMenuToggled ? "block" : "hidden"}`}
      ></div>
      <div
        className={`mobile-menu-wrapper fixed h-[100vh] w-[300px] bg-[#F9F6EE] top-0 ${isMobileMenuToggled ? "right-0" : "right-[-300px]"} flex flex-col items-end pt-[60px] pr-[16px]`}
      >
        <div
          className="close-btn-container cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66665 23.6667L0.333313 21.3333L9.66665 12L0.333313 2.66667L2.66665 0.333332L12 9.66667L21.3333 0.333332L23.6666 2.66667L14.3333 12L23.6666 21.3333L21.3333 23.6667L12 14.3333L2.66665 23.6667Z"
              fill="#131313"
            />
          </svg>
        </div>
        <div className="mobile-options mt-[80px] font-[500] flex flex-col gap-[20px] text-[24px] text-right">
          <a href="" className="single-option">
            About
          </a>
          <a href="" className="single-option">
            Rent-a-dev
          </a>
          <a href="" className="single-option">
            Paperwork
          </a>
        </div>
        <button className="btn-primary mt-[93px]">Contact us</button>
      </div>
    </>
  );
}
