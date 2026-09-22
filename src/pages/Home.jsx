import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Hero from "../selections/Hero";
import About from "../selections/About";
import Projects from "../selections/Projects";
import Experiences from "../selections/Experiences";
import Sertivication from "../selections/Sertivication";

const Home = () => {
  const location = useLocation();

  // Smooth-scroll to a section when navigating from another route
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const timer = setTimeout(() => {
      scroller.scrollTo(target, { smooth: true, duration: 500 });
    }, 80);
    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Sertivication />
    </>
  );
};

export default Home;
