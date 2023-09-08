import React from "react";
import "./about.css";
import cvadd1 from "../../assets/cvadd1.jpg";
import cvadd2 from "../../assets/cvadd2.jpg";
import cvadd3 from "../../assets/cvadd3.jpg";
import cvadd4 from "../../assets/cvadd4.jpg";
import cvadd5 from "../../assets/cvadd5.jpg";
import cvadd6 from "../../assets/cvadd6.jpg";

function About() {
  return (
    <section className="about__container" id="about">
      <div className="ctn__left">
        <div className="gallery">
          <div className="clipped-border">
            <img src={cvadd1} id="clipped" alt="" />
          </div>
          <div className="clipped-border">
            <img src={cvadd2} id="clipped" alt="" />
          </div>
          <div className="clipped-border">
            <img src={cvadd3} id="clipped" alt="" />
          </div>
          <div className="clipped-border">
            <img src={cvadd4} id="clipped" alt="" />
          </div>
          <div className="clipped-border">
            <img src={cvadd5} id="clipped" alt="" />
          </div>
          <div className="clipped-border">
            <img src={cvadd6} id="clipped" alt="" />
          </div>
          
        </div>
      </div>
      <div className="ctn__right">
        <h1>Une communauté, un laboratoire ...</h1>
        <p>
          Communauté axée sur l'innovation au sein de la jeunesse Béninoise et d'ailleurs,
          INNOV UP est un laboratoire d'innovation et de team building destiné à
          l'apprentissage, à la découverte et à la mise en œuvre des solutions efficaces
          et idoines à la création de richesses par les jeunes. Nous agissons
          principalement dans la recherche de solution numérique étendu vers tous les
          autres domaine.
        </p>
      </div>
    </section>
  );
}

export default About;
