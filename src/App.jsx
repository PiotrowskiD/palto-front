import "./App.css";
import Heroarea from "./components/hero/Heroarea.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import LifePackage from "./components/life-package/LifePackage.jsx";
import SlidingTiles from "./components/sliding-tiles/SlidingTiles.jsx";
import Help from "./components/help/Help.jsx";
import Paperwork from "./components/paperwork/Paperwork.jsx";
import Advisory from "./components/advisory/Advisory.jsx";
import Consulting from "./components/consulting/Consulting.jsx";
import Struggling from "./components/struggling/Struggling.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

import Lenis from "lenis";
import { useEffect } from "react";
import { LanguageProvider } from "./components/internationalization/LanguageContext.jsx";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <LanguageProvider>
      <div className={"overflow-x-clip"}>
        <Navbar />
        <Heroarea />
        <div className="parallax-content">
          <About />
          <LifePackage />
          <SlidingTiles />
          <Help />
          <Paperwork />
          <Advisory />
          <Consulting />
          <Struggling />
          <Contact />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
