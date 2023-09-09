import React from "react";
import "./title_left.css";
import Reaveal from "../reveal/Reaveal";

function TitleLeft({ title }) {
  return (
    <div className="title__left">
      <Reaveal>
        <p>{title}</p>
      </Reaveal>
    </div>
  );
}

export default TitleLeft;
