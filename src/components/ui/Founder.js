import { useState } from "react";
import classes from "./Founder.module.css";
import found from "../images/founder1.jpg";

function Founder() {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <span className="extra-content">

        <p>
          In 1985, comrade Ita Effanga lost his father while in Jss2. A
          situation that almost marred his chances of continuing in school as
          the father was the bread winner of the family. This young orphan took
          up the challenge of going to school without any specific sponsor and
          vowed never give up. After completing his secondary school education
          in Methodist boys high school in 1989, he proceeded to the college of
          health technology in 1991 where he obtained a higher national diploma
          (HND) in medical diagnostic radiography. In his desire to further his
          education , he gained admission into the university of Calabar where
          he graduated with a bachelor of science (B.Sc.) environmental
          protection and resource management from 1999-2002. Still in his desire
          and passion to furthering his education, he proceeded to the
          University of Calabar, where he bagged a master degree in education
          (M.Ed.) Environmental education in 2019.
        </p>

        <p>
          In 2005, comrade Ita Effanga emerged a two term chairman of the
          medical and health workers union in Calabar general hospital. His
          humility and dedication to service and prudent management of resources
          catapulted him to the state council of medical and health workers
          union of Nigeria, and was also elected as the state trustee in 2009.
          In 2015, Comrade Ita Effanga won a keenly contested election to become
          the state treasurer of medical and health workers union the cross
          river state.
        </p>

        <p>
          In 2019, he contested the office of the state chairman, council of
          medical and health workers union, a position he merited but lost.
          Comrade ita Effanga is a philanthropist, a political analyst and a
          labor activist. He is the founder of Breakforth intercessors for
          prisoners, a Christian correctional and philanthropic organization
          which looks after the welfare of inmates in Afokang prison. He has
          great passion for help to he poor and needy in the society. He is
          founding member of governor ben ayade neighborhood coalition.
        </p>

        <p>
          Comrade Effanga Ita is a multiple award winner, having won several
          awards within and outside cross river state. They include:
        </p>

        <ul>
          <li>
            Award of excellence by Christian youths and singles in cross river
            state.
          </li>
          <li>Pillar of youth award by tower church.</li>
          <li>Kingdom service award by Calabar Christian fellowship.</li>
          <li>
            Award of excellence by the university of calabar, faculty of
            management sciences.
          </li>
          <li>
            Best performing award by Cross River State council of radiography
            technologists association.
          </li>
          <li>
            Integrity/professional award by the institute of human and natural
            resources, Abuja and was inducted as a fellow of the institute.
          </li>
          <li>
            Humanitarian service award by Union corps of St. Lazarus int’l,
            2020.
          </li>
          <li>
            Leadership award by the mount Zion lighthouse gospel church
            incorporation, 2021.
          </li>
          <li>
            Pillar of God’s harvest award by the Presbyterian church of Nigeria,
            2021.
          </li>
        </ul>

        <p>
          Comrade Ita Effanga is happily married to his dear wife, Mrs. Ekanem
          Ita Effanga and the marriage is blessed with four children.
        </p>
      </span>
    </div>
  );

  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <section className={classes.founder}>
      <h2 className="section-heading">About The Founder</h2>
      <p>Comrade Effanga Ita</p>

      <div className={classes.pricingColumn}>
        <div className="card">
          <img
            className="card-image-top"
            src={found}
            alt="comrade effanga ita"
          />
          <div className={`card-header ${classes.cent}`}>
            <h3 className={classes.founderName}>Comrade Ita Effanga Edem</h3>
          </div>
          <div className="card-body">
            <p>
              The founder of the COMRADE ITA EFFANGA SCHOLARSHIP FOUNDATION
              (CIESF) is Comrade Ita Effanga Edem himself. He announced his
              intention to set up the foundation in his name on the 23rd of
              June, 2020 during his 50th birthday. Born on 23rd june, 1970 to
              late Elder Okon Effiom Effiong Offiong, Nee Elder Edem Ita of Ikot
              Edem Ita in Akpabuyo Local Government Area of Cross River,
              Nigeria. Comrade Effanga Ita had his early education in Oron in
              the then old Cross River State before the creation of Akwa Ibom
              State having attended the then prestigious Methodist boys high
              school, Oron from 1983-1989.
            </p>
            
            {readMore && extraContent}

            <button
              className="btn btn-success"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {linkName}
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
