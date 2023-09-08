import React from "react";
import "./cardstarter.css";


function CardStarter({ iconSrc, title, text , color}) {
  const style = {
    backgroundColor: color || '#ffcec0', // Utilisez la couleur de fond des props ou une valeur par défaut
  };

  return (
    <div className="card__container">
      <div className="card__container-head">
        <div style={style}>
          <img src={iconSrc} alt="" />
        </div>
        <h6>{title}</h6>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default CardStarter;
