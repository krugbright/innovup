import React from "react";
import CardCourse from "../../components/card_course/CardCourse";
import "./most_course.css";
import emanuel from "../../assets/emmanuel.jpg";
import dine from "../../assets/dine.jpg";

function MostCourse() {
  return (
    <section className="most-course__container" id="course">
      <div className="most-course__container-head">
        <p>
          Explorez nos cours les plus populaires. Rejoignez la tendance et plongez dans
          les sujets les plus en vogue en ce moment.
        </p>
        <button>Tous les cours</button>
      </div>
      <div className="most-course__container-body">
        <CardCourse
          coursImg={
            "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          mentorImg={
            "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          mentorName={"Rostand KPO-N-MEY"}
          courseCat={"Science"}
          courseTitle={"Les bases de développement web: HTML, CSS, javascript"}
          courseDuration={"8h25min"}
          courseType={"3 vidéos"}
        />
        <CardCourse
          coursImg={
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          }
          mentorImg={emanuel}
          mentorName={"Emmanuel GNIMAGNON"}
          courseCat={"Science"}
          courseTitle={"Les bases du design"}
          courseDuration={"8h25min"}
          courseType={"3 vidéos"}
        />
        <CardCourse
          coursImg={
            "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
          }
          mentorImg={dine}
          mentorName={"Dine BROUHANE"}
          courseCat={"Science"}
          courseTitle={"Tout savoir sur le marketing digital"}
          courseDuration={"8h25min"}
          courseType={"3 vidéos"}
        />
        <CardCourse
          coursImg={
            "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80"
          }
          mentorImg={
            "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          mentorName={"Marveen AINADOU"}
          courseCat={"Science"}
          courseTitle={"Les bases de développement web: HTML, CSS, javascript"}
          courseDuration={"8h25min"}
          courseType={"3 vidéos"}
        />
      </div>
    </section>
  );
}

export default MostCourse;
