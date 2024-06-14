import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu.jsx";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollToSection.js";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);

  const handleMouseEnter = () => {
    if (!isCooldown) {
      setIsHovered(true);
      setIsCooldown(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCooldown(true);
  };

  useEffect(() => {
    if (isCooldown) {
      const cooldownTimer = setTimeout(() => {
        setIsCooldown(false);
      }, 500);

      return () => clearTimeout(cooldownTimer);
    }
  }, [isCooldown]);

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [isScrolledOut, setIsScrolledOut] = useState(false);
  const [isLanguageDropdownToggled, setIsLanguageDropdownToggled] =
    useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const handleLanguageDropdownToggle = () => {
    setIsLanguageDropdownToggled(!isLanguageDropdownToggled);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuToggled(!isMobileMenuToggled);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 996) {
        setIsMobileMenuToggled(false);
      }
    };

    const handleScroll = () => {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;
      setIsNavbarVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10,
      );
      setPrevScrollPos(currentScrollPos);
      setIsScrolledOut(currentScrollPos >= window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const { languageData, switchLanguage, currentLanguage } = useLanguage();

  const changeLanguage = (e) => {
    const newLanguage = e.currentTarget.getAttribute("value");
    switchLanguage(newLanguage);
  };

  return (
    <motion.nav
      className={`flex p-[40px] w-full max-w-[100vw] justify-between items-center 600px:px-[16px] 600px:py-[63px] ${
        isNavbarVisible ? "visible" : "invisible"
      }`}
      initial={{ y: 0 }}
      animate={{ y: isNavbarVisible ? 0 : -100 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <motion.svg
        initial={{
          x: "-120%",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 3,
          type: "spring",
          duration: 1,
          stiffness: 80,
          damping: 15,
        }}
        width="273"
        height="55"
        viewBox="0 0 273 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"logo"}
      >
        <path
          d="M16.1535 53.0648H0V7.76906H21.903C29.1584 7.76906 33.3337 10.6892 35.2502 12.5227C39.0148 16.1899 39.9046 20.8077 39.9046 24.4069C39.9046 28.142 39.0832 32.4203 35.3871 35.7479C31.7594 39.0075 27.6526 39.415 24.1618 39.415H16.1535V53.0648ZM16.1535 20.1965V28.0061H18.9598C19.7812 28.0061 21.4923 27.9382 22.6559 26.7838C23.272 26.2405 23.7511 25.3577 23.7511 23.9995C23.7511 22.5734 23.1351 21.6905 22.519 21.2152C21.7661 20.604 20.3972 20.1965 19.1651 20.1965H16.1535Z"
          fill={isScrolledOut ? "#131313" : "#FEFDFB"}
        />
        <path
          d="M66.954 47.4283H54.3597L53.1277 53.0648H35.6052L51.4165 7.76906H69.7603L86.0507 53.0648H68.4598L66.954 47.4283ZM61.9573 28.0061C61.5466 26.2405 61.2729 24.5428 61.0675 22.9129H60.4515C60.383 24.8144 60.1093 26.3763 59.6986 28.0061L57.4398 36.6986H64.0792L61.9573 28.0061Z"
          fill={isScrolledOut ? "#131313" : "#FEFDFB"}
        />
        <path
          d="M119.131 53.0648H88.604V7.76906H105.168V38.4642H119.131V53.0648Z"
          fill={isScrolledOut ? "#131313" : "#FEFDFB"}
        />
        <path
          d="M141.598 53.0648H125.308V22.098L115.999 22.5055V7.76906H150.907V22.5055L141.598 22.098V53.0648Z"
          fill={isScrolledOut ? "#131313" : "#FEFDFB"}
        />
        <path
          d="M202.878 30.383C202.878 37.6493 200.072 43.2179 196.513 46.8171C192.611 50.7559 186.246 54.0835 177.553 54.0835C168.86 54.0835 162.495 50.7559 158.593 46.8171C155.034 43.2179 152.228 37.6493 152.228 30.383C152.228 23.1846 155.034 17.616 158.593 14.0168C162.495 10.078 168.86 6.75042 177.553 6.75042C186.246 6.75042 192.611 10.078 196.513 14.0168C200.072 17.616 202.878 23.1846 202.878 30.383ZM177.553 21.351C174.61 21.351 172.693 22.5055 171.598 23.6599C169.955 25.3577 168.997 28.0061 168.997 30.4509C168.997 33.0315 169.955 35.5441 171.598 37.174C172.967 38.5321 175.02 39.4829 177.553 39.4829C180.086 39.4829 182.139 38.5321 183.508 37.174C185.014 35.6799 186.109 33.3031 186.109 30.4509C186.109 27.5987 185.151 25.2219 183.508 23.6599C182.276 22.4376 180.291 21.351 177.553 21.351Z"
          fill={isScrolledOut ? "#131313" : "#FEFDFB"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M248.265 17.7828C261.536 17.9504 272.222 23.3886 272.965 34.6146C273.643 44.8597 264.459 53.7736 247.747 54.885C233.129 55.8571 220.877 50.7008 220.028 38.135C219.855 35.5709 220.435 33.079 221.633 30.7691C214.882 32.385 208.849 31.0104 207.56 27.3099C206.443 24.1043 209.589 19.3925 214.77 17.2897C213.357 6.3084 222.305 0 232.432 0C241.773 0 249.858 7.47662 248.265 17.7828ZM233.755 21.0285C235.645 21.21 237.381 19.2667 237.633 16.6878C237.885 14.109 236.556 11.8712 234.666 11.6897C232.775 11.5081 231.039 13.4515 230.787 16.0303C230.536 18.6092 231.864 20.8469 233.755 21.0285Z"
          fill={isScrolledOut ? "#131313" : "#FEFDFB"}
        />
      </motion.svg>
      <motion.div
        initial={{
          x: "120%",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 3,
          type: "spring",
          duration: 1,
          stiffness: 80,
          damping: 15,
        }}
      >
        <div
          className={`options-wrapper ${isLanguageDropdownToggled ? "hovered" : ""} ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="dropdown-toggler relative flex items-center gap-[12px] cursor-pointer mr-[12px]"
            onClick={handleLanguageDropdownToggle}
          >
            <p className={"font-[500] text-[18px] uppercase"}>
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
            <div
              className={`language-dropdown ${isLanguageDropdownToggled ? "" : "active"} cursor-auto bg-[#FEFDFB] fixed left-[20px] top-[60px] w-[100px] rounded-[16px] p-[20px]`}
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
          <a
            className="single-option"
            onClick={(e) => handleScroll(e, "about-section")}
          >
            {languageData.navbar.about}
          </a>
          <a
            className="single-option"
            onClick={(e) => handleScroll(e, "sliding-section")}
          >
            {languageData.navbar.rentDev}
          </a>
          <a
            className="single-option"
            onClick={(e) => handleScroll(e, "paperwork-section")}
          >
            {languageData.navbar.paperwork}
          </a>
          <a
            className={
              "bg-[#E9EB76] px-[20px] py-[8.5px] rounded-[200px] contact-btn cursor-pointer"
            }
            onClick={(e) => handleScroll(e, "contact-section")}
          >
            {languageData.navbar.contact}
          </a>
        </div>
      </motion.div>
      <div
        className="mobile-menu-toggle hidden 996px:block cursor-pointer"
        onClick={handleMobileMenuToggle}
      >
        <motion.svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{
            x: "500%",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 3,
            type: "spring",
            duration: 1,
            stiffness: 80,
            damping: 15,
          }}
        >
          <path
            d="M0 20V16.6667H30V20H0ZM0 11.6667V8.33333H30V11.6667H0ZM0 3.33333V0H30V3.33333H0Z"
            fill={isScrolledOut ? "#131313" : "#FEFDFB"}
          />
        </motion.svg>
      </div>
      <MobileMenu
        isMobileMenuToggled={isMobileMenuToggled}
        handleMobileMenuToggle={handleMobileMenuToggle}
        isLanguageDropdownToggled={isLanguageDropdownToggled}
        handleLanguageDropdownToggle={handleLanguageDropdownToggle}
      />
    </motion.nav>
  );
}
