import React from "react";
import "./footer.css";
import logoFooter from "../../assets/logo2.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <section className="footer__ctn" id="footer">
      <div className="footer__ctn-head">
        
      </div>
      <div className="footer__ctn-body">
        <div className="footer__ctn-body--col1 grid-item">
          <img src={logoFooter} id="logo__footer" alt="" />
        </div>

        <div className="footer__ctn-body--col2 ">
          <h3>E-Learning</h3>
          <p>Nous créons un avenir durable</p>
        </div>

        <div className="footer__ctn-body--col3 ">
          <h3>Courses</h3>
          <ul>
            <li>Design</li>
            <li>Développement</li>
            <li>Marketing</li>
            <li>Coaching</li>
          </ul>
        </div>

        <div className="footer__ctn-body--col4 ">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer__ctn-body--col5 ">
          <h3>Contact</h3>
          <p>Maison des jeunes Abomey-calavi</p>

          <a href="mailto=">email@gmail.com</a>

          <p>+229 53 83 30 01</p>
          <p>Suivez nous sur </p>
          <div className="footer-icon">
            
            <a href="https://www.facebook.com/cvaddinnov/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://www.facebook.com/cvaddinnov/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
