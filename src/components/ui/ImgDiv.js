import classes from "./ImgDiv.module.css";

function ImgDiv() {
  return (
    <div className={classes.imger}>
      <div className={`container ${classes.cenq}`}>
        <div className="row">
          <div className="col-md-6"></div>
          {/* Background-image Write up  */}
          <div className="col-md-6">
            <h1 className={classes.bigHeading}>
              Comrade Effanga Ita Scholarship Foundation.
            </h1>

            <div className="cent">
              <div className="droppeddown">
                <button className="btn btn-success downloadButton btn-lg dropdown-toggle power">
                  Contact Us{" "}
                </button>
                <div className="dropdowConten">

                <a
                    href="https://wa.me/qr/S2J6CUTQSNPRG1"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="stope">
                      <i className="fa-brands fa-whatsapp"></i> WhatsApp
                    </span>
                  </a>

                  <a href="mailto:theceisfoundation@gmail.com?subject=Contacting%20CEIS-Foundation&body=Good%20day%20CEIS-Foundation.">
                    <span className="stope">
                    <span style={{"marginRight": "1%", "marginLeft": "-7%"}}><i className="fa-solid fa-envelope"></i> </span>
                       Email Us
                    </span>
                  </a>

                  <a href="tel:+2348129245801">
                    <span className="stope">
                    <span style={{"marginRight": "3%", "marginLeft": "-16%"}}><i className="fa-solid fa-phone"></i></span>
                      Phone
                    </span>
                  </a>
                  
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgDiv;
