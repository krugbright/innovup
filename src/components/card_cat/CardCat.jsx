import React from "react";
import "./card_cat.css"

function CardCat({ iconScrc, text }) {
  return (
    <div className="card__cat">
      <div className="img__container">
      <img src={iconScrc} alt="" />
      </div>
      <p className="card__cat-title">{text}</p>
      <p className="card__cat-link">Voir plus</p>
    </div>
  );
}

export default CardCat;
