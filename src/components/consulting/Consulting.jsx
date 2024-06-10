import ConsultingImg from "../../assets/consulting/consulting.webp";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function Consulting() {
  const { languageData } = useLanguage();

  return (
    <section className={"consulting-section"}>
      <img src={ConsultingImg} alt="" />
      <div className="text-wrapper">
        <div className="text">
          <h1>{languageData.consulting.title}</h1>
          <p>{languageData.consulting.description}</p>
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
              {languageData.consulting.list.first}
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
              {languageData.consulting.list.second}
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
              {languageData.consulting.list.third}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
