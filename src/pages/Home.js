import { useEffect } from "react";
import ImgDiv from "../components/ui/ImgDiv";
import AboutSum from "../components/ui/AboutSum";
import Founder from "../components/ui/Founder";
import Testimonial from "../components/ui/Testimonial";
import MainNavigation from "../components/Layout/MainNavigation";
import { Fragment } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <MainNavigation/>
      <ImgDiv />
      <AboutSum />
      <Founder />
      <Testimonial />
    </Fragment>
  );
}

export default Home;
