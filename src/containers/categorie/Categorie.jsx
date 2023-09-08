import React from "react";
import "./categorie.css";
import CardCat from "../../components/card_cat/CardCat";
import curve from "../../assets/curve.png";
import web from "../../assets/web-development.png";
import marketing from "../../assets/social-media-marketing.png";
import coaching from "../../assets/motivation.png";

function Categorie() {
  return (
    <section className="cat__container">
      <p className="cat__container-text">
        Découvrez nos meilleures catégories de cours. Trouvez l'inspiration pour votre
        prochain apprentissage parmi notre sélection exceptionnelle.
      </p>
      <div className="cat__container-list">
        <CardCat iconScrc={curve} text={"Design"} />
        <CardCat iconScrc={web} text={"Informatique"} />
        <CardCat iconScrc={marketing} text={"Marketing"} />
        <CardCat iconScrc={coaching} text={"Coaching"} />
      </div>
    </section>
  );
}

export default Categorie;
