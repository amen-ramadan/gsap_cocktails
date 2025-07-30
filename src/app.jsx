import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const waitForMedia = async () => {
      // هنا تبحث عن الصور والفيديوهات داخل الصفحة
      const mediaElements = document.querySelectorAll("img, video");

      const promises = Array.from(mediaElements).map((el) => {
        return new Promise((resolve) => {
          if (el.complete || el.readyState >= 3) {
            resolve(); // تم التحميل
          } else {
            el.addEventListener("load", resolve);
            el.addEventListener("loadeddata", resolve); // للفيديو
            el.addEventListener("error", resolve); // لو حدث خطأ
          }
        });
      });

      await Promise.all(promises);
      setAllLoaded(true);
    };

    waitForMedia();
  }, []);
  return (
    <>
      {allLoaded ? (
        <main>
          <Navbar />
          <Hero />
          <Cocktails />
          <About />
          <Art />
          <Menu />
          <Contact />
        </main>
      ) : (
        <div className="react-fallback-loading">Loading content...</div>
      )}
    </>
  );
};

export default App;
