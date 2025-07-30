import React, { useState, useEffect } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Preloader from "./components/Preloader";
import preloadAssets from "./utils/preload";
import { allAssets } from "./constants/assets";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadAssets(allAssets)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to preload assets:", error);
        setLoading(false); // Even if preloading fails, we should hide the preloader
      });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <main>
          <Navbar />
          <Hero />
          <Cocktails />
          <About />
          <Art />
          <Menu />
          <Contact />
        </main>
      )}
    </>
  );
};

export default App;
