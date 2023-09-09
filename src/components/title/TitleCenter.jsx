import React from "react";
import "./title_center.css";
import Reaveal from "../reveal/Reaveal";

function TitleCenter({ title }) {
  return (
    <div className="title__center">
      <Reaveal>
        <p>{title}</p>
      </Reaveal>
    </div>
  );
}

export default TitleCenter;
