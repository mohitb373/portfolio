"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { pageOrder } from "@/data/profile";
import Page from "./Page";
import DarkModeSelector from "./DarkModeSelector";
import Home from "./sections/Home";
import About from "./sections/About";
import ExperienceSection from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Portfolio() {
  const appRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const currentRef = useRef(0);

  const scrollFunc = useCallback((num: number) => {
    if (num < 0 || num >= pageOrder.length) return;
    currentRef.current = num;
    const width = appRef.current?.offsetWidth ?? window.innerWidth;
    const ease = "elastic.out(0.3, 0.4)";
    gsap.to(":root", {
      "--background-rotation": `${num * -30}deg`,
      duration: 0.8,
      ease,
    });
    gsap.to(":root", {
      "--background-pos": `${num * width}px`,
      duration: 0.8,
      ease,
    });
    gsap.to(":root", { "--page-rotation": `${num}`, duration: 0.8, ease });
    window.history.replaceState(null, "Portfolio", `#${pageOrder[num]}`);
  }, []);

  const changeDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      gsap.to(":root", {
        "--background-color": next ? "black" : "white",
        duration: 0.4,
      });
      gsap.to(":root", {
        "--secondary-color": next ? "white" : "black",
        duration: 0.4,
      });
      gsap.to(":root", {
        "--opacity-color": next
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)",
        duration: 0.4,
      });
      return next;
    });
  };

  useEffect(() => {
    setLoaded(true);
    const loc = window.location.hash.slice(1);
    const idx = (pageOrder as readonly string[]).indexOf(loc);
    if (idx >= 0) scrollFunc(idx);

    const onResize = () => scrollFunc(currentRef.current);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollFunc(currentRef.current + 1);
      if (e.key === "ArrowLeft") scrollFunc(currentRef.current - 1);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [scrollFunc]);

  const total = pageOrder.length;

  return (
    <div
      ref={appRef}
      className="app-stage"
      style={{
        position: "relative",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div className="bg" style={{ opacity: darkMode ? 0.3 : 1 }} />
      <DarkModeSelector value={darkMode} onClick={changeDarkMode} />

      <Page num={0} total={total} scroll={scrollFunc}>
        <Home scroll={scrollFunc} onLoad={() => setLoaded(true)} />
      </Page>
      <Page num={1} total={total} scroll={scrollFunc}>
        <About scroll={scrollFunc} />
      </Page>
      <Page num={2} total={total} scroll={scrollFunc}>
        <ExperienceSection scroll={scrollFunc} />
      </Page>
      <Page num={3} total={total} scroll={scrollFunc}>
        <Skills scroll={scrollFunc} />
      </Page>
      <Page num={4} total={total} scroll={scrollFunc}>
        <Contact scroll={scrollFunc} />
      </Page>
    </div>
  );
}
