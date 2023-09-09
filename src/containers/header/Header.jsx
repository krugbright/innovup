import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/banner_img.png";
import logo_head from "../../assets/logo2.png";
import "./header.css";
import Reaveal from "../../components/reveal/Reaveal";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarPosition);
    return () => {
      window.removeEventListener("scroll", changeNavBarPosition);
    };
  }, []);

  function changeNavBarPosition() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <>
      <nav className={`header__container-menu ${isScrolled ? "fixed" : ""}`}>
        <motion.div
          variants={{ hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.25, duration: 0.5 }}
          id="logo"
        >
          <a href=".">
            <img src={logo_head} alt="" id="logo_head" />
          </a>
        </motion.div>
        <motion.ul
          variants={{ hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="menu__links"
        >
          <li className="menu__links-item">
            <a href="#home">Accueil</a>
          </li>
          <li className="menu__links-item">
            <a href="#starter">Comment ça marche</a>
          </li>
          <li className="menu__links-item">
            <a href="#course">Tous les cours</a>
          </li>
          <li className="menu__links-item"><a href="">Blog</a></li>
          <li className="menu__links-item">
            <a href="#about">A propos</a>
          </li>
          <li className="menu__links-item">
            <a href="#footer">Contact</a>
          </li>
        </motion.ul>
        <motion.div
          variants={{ hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="menu__btn"
        >
          <button className="btn__login">Se connecter</button>
          <button className="btn__register">S'inscrire</button>
        </motion.div>
      </nav>

      <Reaveal>
        <header className="header__container" id="home">
          <section className="header__container-banner">
            <div className="banner__left">
              <h1>Plongez dans le futur de l'apprentissage numérique !</h1>
              <p>
                Bienvenue sur notre plateforme de e-learning innovante, où l'avenir de
                l'éducation se déroule en ligne. Explorez un univers d'apprentissage
                digitalisé, où l'accès à la connaissance est à portée de clic. Nos cours
                interactifs, nos ressources multimédias de pointe et notre communauté
                d'apprenants connectés vous permettront de développer des compétences
                essentielles pour l'ère numérique.
              </p>
              <button>Courses</button>
            </div>
            <div className="banner__right">
              <img src={bannerImg} alt="" />
            </div>
          </section>
        </header>
      </Reaveal>
    </>
  );
}

export default Header;
