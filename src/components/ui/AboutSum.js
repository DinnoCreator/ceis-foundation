import classes from "./AboutSum.module.css";
import { Link } from "react-router-dom";

function AboutSum() {
  return (
    <section className={classes.features}>
      <div className="row">
        <div className={`${classes.featureBox} col-lg-4`}>
          <Link to="/about-us">
            <i className={`fas fa-check-circle ${classes.icon}`}></i>
          </Link>
          <h3 className={classes.featuresHeading}>MISSION STATEMENT.</h3>
          <p>
            The mission of this foundation is to invest in the Nigerian youth’s
            unlimited and untapped potential as the key to socioeconomic growth
            to enhance the standard of living of the society and increase human
            efficiency..
          </p>
        </div>
        <div className={`${classes.featureBox} col-lg-4`}>
          <Link to="/about-us">
            <i className={`fas fa-bullseye ${classes.icon}`}></i>
          </Link>
          <h3 className={classes.featuresHeading}>VISION STATEMENT</h3>
          <p>
            Our vision is to equip the future of our nation through the
            paramount avenue of education. Our long-term goal is to bridge the
            knowledge gap to enable poor and vulnerable children and youths
            compete in a global economy through a progressive and continuous
            learning.
          </p>
        </div>
        <div className={`${classes.featureBox} col-lg-4`}>
          <Link to="/about-us">
            <i className={`fas fa-heart ${classes.icon}`}></i>
          </Link>
          <h3 className={classes.featuresHeading}>GOAL.</h3>
          <p>
            The main aim is to contribute to the success and progress of
            humanity through the encouragement of educational pursuits..
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSum;
