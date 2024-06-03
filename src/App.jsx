import "./App.css";
import Heroarea from "./components/hero/Heroarea.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import LifePackage from "./components/life-package/LifePackage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Heroarea />
      <About />
      <LifePackage />
    </>
  );
}

export default App;
