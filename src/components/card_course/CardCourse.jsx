import React from "react";
import "./card_course.css";

function CardCourse({
  coursImg,
  mentorImg,
  mentorName,
  courseCat,
  courseTitle,
  courseDuration,
  courseType,
}) {
  return (
    <div className="card__course">
      <img className="card__course-img" src={coursImg} alt="" />

      <div className="course__info">
        <img className="course__info-profil" src={mentorImg} alt="" />
        <p className="course__info-name"> {mentorName} </p>
        <p className="course__info-cat"> {courseCat} </p>
      </div>

      <p className="course__title">{courseTitle}</p>
      <div className="course__info__bottom">
        <div className="course__info-duration">
          <span className="material-symbols-outlined">schedule</span>
          <p> {courseDuration} </p>
        </div>

        <div className="course__info-mode">
          <span className="material-symbols-outlined">menu_book</span>
          <p> {courseType} </p>
        </div>
      </div>

      <p className="course__price">Gratuit</p>
    </div>
  );
}

export default CardCourse;
