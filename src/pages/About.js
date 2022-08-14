import { Fragment, useEffect } from "react";
import AboutCard from "../components/ui/AboutCard";
import Testimonial from "../components/ui/Testimonial";
import MainNavigation from "../components/Layout/MainNavigation";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <MainNavigation/>
      <AboutCard />
      <Testimonial />
    </Fragment>
  );
}

export default About;
