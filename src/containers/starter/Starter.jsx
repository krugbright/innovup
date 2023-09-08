import React from "react";
import CardStarter from "../../components/card_start/CardSatarter";
import "./starter.css";
import user from "../../assets/user.png";
import choice from "../../assets/choice.png";
import enjoy from "../../assets/enjoy.png";

function Starter() {
  return (
    <section className="container__starter" id="starter">
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
      <div className="container__starter-text">
        <h1>
          Simple <span>3 way</span> to start learning
        </h1>
        <p>
          Rejoignez-nous dès maintenant pour façonner votre avenir grâce à l'apprentissage
          en ligne de qualité supérieure.
        </p>
        <button>Se connecter</button>
      </div>
    </section>
  );
}

export default Starter;
