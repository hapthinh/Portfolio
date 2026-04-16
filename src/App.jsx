import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import BackToTop from "./components/BackToTop/BackToTop";
import "./assets/styles/global.scss";
import MyJourney from "./sections/MyJourney/MyJourney";
import LiquidLoader from "./components/LiquidLoader/LiquidLoader";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const handleScroll = () => {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const currentScroll = window.scrollY + 80;

      setShowNavbar(currentScroll >= heroBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return loading ? (
    <LiquidLoader onFinish={() => setLoading(false)} />
  ) : (
    <>
      {showNavbar && <Navbar />}

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MyJourney />
        <Contact />
      </main>

      <BackToTop />
    </>
  );
}

export default App;
