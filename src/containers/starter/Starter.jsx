import React from "react";
import CardStarter from "../../components/card_start/CardSatarter";
import "./starter.css";
import user from "../../assets/user.png";
import choice from "../../assets/choice.png";
import enjoy from "../../assets/enjoy.png";
import ReavealLR from "../../components/reveal/ReavealLR";
import ReavealRL from "../../components/reveal/ReavealRL";

function Starter() {
  return (
    <section className="container__starter" id="starter">
      <ReavealRL>
      <CardStarter
        iconSrc={user}
        title={"Créez votre compte"}
        text={"Inscrivez-vous rapidement."}
        color="#ffcec0"
      />
      <CardStarter
        iconSrc={choice}
        title={"Choisissez votre cours"}
        text={"Trouvez votre cours idéal."}
        color="#f5d5a5"
      />
      <CardStarter
        iconSrc={enjoy}
        title={"Apprenez à votre rythme"}
        text={"Apprenez selon votre emploi du temps."}
        color="#a9d9fc"
      />
      </ReavealRL>
      <ReavealLR>
        <div className="container__starter-text">
          <h1>
            <span> 3 façons</span> simples de commencer à apprendre
          </h1>
          <p>
            Rejoignez-nous dès maintenant pour façonner votre avenir grâce à
            l'apprentissage en ligne de qualité supérieure.
          </p>
          <button>Se connecter</button>
        </div>
      </ReavealLR>
    </section>
  );
}

export default Starter;
