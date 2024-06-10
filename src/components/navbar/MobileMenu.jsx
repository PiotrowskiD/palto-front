import { scrollToSection } from "../../utils/scrollToSection.js";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function MobileMenu({
  isMobileMenuToggled,
  handleMobileMenuToggle,
  isLanguageDropdownToggled,
  handleLanguageDropdownToggle,
}) {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const handleBoth = (e, sectionId) => {
    handleScroll(e, sectionId);
    handleMobileMenuToggle();
  };

  const { languageData, switchLanguage, currentLanguage } = useLanguage();

  const changeLanguage = (e) => {
    const newLanguage = e.currentTarget.getAttribute("value");
    switchLanguage(newLanguage);
  };

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
          <a
            className="single-option cursor-pointer"
            onClick={(e) => handleBoth(e, "about-section")}
          >
            {languageData.navbar.about}
          </a>
          <a
            className="single-option cursor-pointer"
            onClick={(e) => handleBoth(e, "sliding-section")}
          >
            {languageData.navbar.rentDev}
          </a>
          <a
            className="single-option cursor-pointer"
            onClick={(e) => handleBoth(e, "paperwork-section")}
          >
            {languageData.navbar.paperwork}
          </a>
          <div
            className="mobile-dropdown-toggler flex justify-end items-center gap-[12px] cursor-pointer"
            onClick={handleLanguageDropdownToggle}
          >
            <p className={"font-[500] text-[24px] uppercase"}>
              {currentLanguage}
            </p>
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${isLanguageDropdownToggled ? "active" : ""}`}
            >
              <path
                d="M7.99988 6.71622L14.1332 0.5L15.9999 2.39189L7.99988 10.5L-0.000122153 2.39189L1.86654 0.499999L7.99988 6.71622Z"
                fill="#131313"
              />
            </svg>
          </div>
          <div
            className={`language-dropdown ${isLanguageDropdownToggled ? "" : "active"} flex justify-end`}
          >
            <ul className={"flex flex-col gap-[8px]"}>
              <li
                className={"active"}
                value={"en"}
                onClick={(e) => changeLanguage(e)}
              >
                EN
              </li>
              <li value={"pl"} onClick={(e) => changeLanguage(e)}>
                PL
              </li>
            </ul>
          </div>
        </div>
        <button
          className="btn-primary mt-[93px]"
          onClick={(e) => handleBoth(e, "contact-section")}
        >
          {languageData.navbar.contact}
        </button>
      </div>
    </>
  );
}
