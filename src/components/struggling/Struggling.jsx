import StrugglingImg from "../../assets/struggling/struggling.webp";
import { useLanguage } from "../internationalization/LanguageContext.jsx";

export default function Struggling() {
  const { languageData } = useLanguage();

  return (
    <section className={"struggling-section"}>
      <img src={StrugglingImg} alt="" />
      <div className="text-wrapper">
        <div className="text">
          <h1 className={"uppercase"}>{languageData.struggling.title}</h1>
          <p>{languageData.struggling.description}</p>
        </div>
      </div>
    </section>
  );
}
