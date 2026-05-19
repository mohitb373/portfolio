"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { pageOrder } from "@/data/profile";
import Page from "./Page";
import DarkModeSelector from "./DarkModeSelector";
import NavDots from "./NavDots";
import Home from "./sections/Home";
import About from "./sections/About";
import ExperienceSection from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const THEME_KEY = "portfolio-theme";

export default function Portfolio() {
  const appRef = useRef<HTMLDivElement>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const currentRef = useRef(0);
  const reducedRef = useRef(false);
  const wheelLock = useRef(false);

  const applyTheme = useCallback((dark: boolean, instant = false) => {
    const d = instant || reducedRef.current ? 0 : 0.4;
    gsap.to(":root", {
      "--background-color": dark ? "black" : "white",
      duration: d,
    });
    gsap.to(":root", {
      "--secondary-color": dark ? "white" : "black",
      duration: d,
    });
    gsap.to(":root", {
      "--opacity-color": dark
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)",
      duration: d,
    });
  }, []);

  const scrollFunc = useCallback((num: number) => {
    if (num < 0 || num >= pageOrder.length) return;
    currentRef.current = num;
    setCurrent(num);
    setShowHint(false);
    const width = appRef.current?.offsetWidth ?? window.innerWidth;
    const duration = reducedRef.current ? 0 : 0.8;
    const ease = "elastic.out(0.3, 0.4)";
    gsap.to(":root", {
      "--background-rotation": `${num * -30}deg`,
      duration,
      ease,
    });
    gsap.to(":root", {
      "--background-pos": `${num * width}px`,
      duration,
      ease,
    });
    gsap.to(":root", { "--page-rotation": `${num}`, duration, ease });
    window.history.replaceState(null, "Portfolio", `#${pageOrder[num]}`);
  }, []);

  const changeDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next ? "dark" : "light");
      } catch {}
      return next;
    });
  };

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Restore saved theme (default: dark)
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch {}
    if (saved === "light") {
      setDarkMode(false);
      applyTheme(false, true);
    }

    setLoaded(true);

    const loc = window.location.hash.slice(1);
    const idx = (pageOrder as readonly string[]).indexOf(loc);
    if (idx >= 0) scrollFunc(idx);

    const hintTimer = setTimeout(() => setShowHint(false), 6000);

    const onResize = () => scrollFunc(currentRef.current);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollFunc(currentRef.current + 1);
      if (e.key === "ArrowLeft") scrollFunc(currentRef.current - 1);
    };
    const onWheel = (e: WheelEvent) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 12 || wheelLock.current) return;
      wheelLock.current = true;
      scrollFunc(currentRef.current + (delta > 0 ? 1 : -1));
      setTimeout(() => {
        wheelLock.current = false;
      }, 900);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      clearTimeout(hintTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [scrollFunc, applyTheme]);

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
        <Projects scroll={scrollFunc} />
      </Page>
      <Page num={4} total={total} scroll={scrollFunc}>
        <Skills scroll={scrollFunc} />
      </Page>
      <Page num={5} total={total} scroll={scrollFunc}>
        <Contact scroll={scrollFunc} />
      </Page>

      <NavDots current={current} onSelect={scrollFunc} />

      <div
        className="fixed noselect"
        style={{
          bottom: "calc(3vmin + 46px)",
          left: "50%",
          transform: "translateX(-50%) translateZ(1px)",
          zIndex: 50,
          fontSize: "max(1.7vmin, 0.72rem)",
          opacity: showHint && loaded ? 0.55 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {"< scroll · swipe · ◄ ► keys >"}
      </div>
    </div>
  );
}
