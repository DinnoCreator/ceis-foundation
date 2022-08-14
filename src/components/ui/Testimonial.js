import classes from "./Testimonial.module.css";
import tes from "../images/test.jpg";

function Testimonial() {
  return (
    <section id="testimonials" className={classes.testimonials}>
      <div
        id="testimonialcarousels"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#testimonialcarousels"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialcarousels"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialcarousels"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialcarousels"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialcarousels"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${classes.carouselItem} active`}>
            <h2 className={classes.testimonialText}>
              My name is confidence Ephraim and I am ten years old. I am an
              orphan (I was told I lost dad at the age of one), meanwhile mommy
              is physically challenged as she can’t speak or hear.
            </h2>
            <img
              className={classes.testimonialImage}
              src={tes}
              alt="testifier"
            />
            <em>Confidence Ephraim</em>
          </div>

          <div className={`carousel-item ${classes.carouselItem}`}>
            <h2 className={classes.testimonialText}>
              Mom left me because of her inability to take good care of me all
              by herself and went to stay in Akwa Ibom State. My uncle took me
              and trained me till I got to primary 6 at government primary
              school Obufa Esuk.
            </h2>
            <img
              className={classes.testimonialImage}
              src={tes}
              alt="testifier"
            />
            <em>Confidence Ephraim</em>
          </div>

          <div className={`carousel-item ${classes.carouselItem}`}>
            <h2 className={classes.testimonialText}>
              I wrote the common entrance examination and performed excellently
              but could not move forward to begin secondary school. I went back
              to primary six all because I did not want to stay at home.
            </h2>
            <img
              className={classes.testimonialImage}
              src={tes}
              alt="testifier"
            />
            <em>Confidence Ephraim</em>
          </div>

          <div className={`carousel-item ${classes.carouselItem}`}>
            <h2 className={classes.testimonialText}>
              I remained in the primary school for almost two sessions until the
              foundation (CEIS Foundation) got to know about my situation
              through one of my teachers and stepped in to help me by
              registering me in the school, paying my fees, getting me books and
              got me uniforms.
            </h2>
            <img
              className={classes.testimonialImage}
              src={tes}
              alt="testifier"
            />
            <em>Confidence Ephraim</em>
          </div>

          <div className={`carousel-item ${classes.carouselItem}`}>
            <h2 className={classes.testimonialText}>
              I am now a JSS2 student of Model Secondary School, Uwanse, CRS. I
              am doing great and excellently. May god bless and enlarge CEIS
              foundation. Amen.
            </h2>
            <img
              className={classes.testimonialImage}
              src={tes}
              alt="testifier"
            />
            <em>Confidence Ephraim</em>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialcarousels"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialcarousels"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
