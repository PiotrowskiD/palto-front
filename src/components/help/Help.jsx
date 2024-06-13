import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function Help() {
  const { languageData, currentLanguage } = useLanguage();

  return (
    <section className={"help-section"}>
      <h1
        className={`uppercase ${currentLanguage === "pl" ? "polish-text" : ""}`}
      >
        {languageData.help.title}
      </h1>
      <p>{languageData.help.description}</p>
    </section>
  );
}
