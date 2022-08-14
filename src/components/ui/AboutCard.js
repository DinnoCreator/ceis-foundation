import classes from "./AboutCard.module.css";

function AboutCard() {
  return (
    <section className={classes.about}>
      <div className={classes.pricingColumn}>
        <div className="card">
          <div className="card-header">
            <h3 className={classes.aboutHead}>About Us</h3>
          </div>
          <div className="card-body">
            <p>
              Comrade Effanga Ita Scholarship Foundation (CEISF) is a
              non-governmental organization established as a legal entity on
              23rd June, 2020. The main aim is to contribute to the success and
              progress of humanity through the encouragement of educational
              pursuits. In line with the experience and belief of the founder
              that the talents of brilliant children need not to be wasted or
              underdeveloped because of poverty, the foundation be seeks to
              achieve the following objectives:
            </p>

            <ul>
              <li>
                To achieve the yearning of the founder to share his “blessings”
                with poor and deprived section of society into which he was
                born.
              </li>
              <li>
                To demonstrate the entrenched belief of the founder that loving
                our “neighbors” by sharing our blessings and fortune will lead
                to global happiness and peace.
              </li>
              <li>
                To provide opportunity in the way of awarding scholarships to
                brilliant and deserving children from poor/deprived backgrounds
                to obtain credible education in institutions of learning in
                Nigeria.
              </li>
            </ul>

            <p>
              The foundation believes in the truth underlining the age-long
              saying that “knowledge is power” as demonstrated by the
              socio-economic development of advanced countries. The less advance
              countries, particularly the African countries must emulate this
              and encourage creative and innovative education to develop their
              societies.
            </p>

            <p>
              The foundation offers annual scholarship to all deserving
              beneficiaries. Areas of study for this scholarship will however be
              decided by the management and board of directors if the need
              arises to either include all fields of study or selected fields of
              study in the future. Potential scholars shall be selected based on
              their academic performance for those in secondary schools and
              universities. The foundation pursues its noble objectives in the
              spirit of the founder’s belief that education should be available
              to all.
            </p>
          </div>
        </div>
      </div>

      <div className={`${classes.pricingColumn} ${classes.follow}`}>
        <div className="card">
          <div className="card-header">
            <h3 className={classes.aboutHead}>Mission Statement</h3>
          </div>

          <div className="card-body">
            <p>
              The mission of this foundation is to invest in the Nigerian
              youth’s unlimited and untapped potential as the key to
              socioeconomic growth to enhance the standard of living of the
              society and increase human efficiency..
            </p>
          </div>
        </div>
      </div>

      <div className={`${classes.pricingColumn} ${classes.follow}`}>
        <div className="card">
          <div className="card-header">
            <h3 className={classes.aboutHead}>Vision Statement</h3>
          </div>
          <div className="card-body">
            <p>
              Our vision is to equip the future of our nation through the
              paramount avenue of education. Our long-term goal is to bridge the
              knowledge gap to enable poor and vulnerable children and youths
              compete in a global economy through a progressive and continuous
              learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
