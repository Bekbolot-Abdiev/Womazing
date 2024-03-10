import React from "react";
// import "../HeaderRoot/HeaderRoot.css";
import "./FooterRoot.css";
import visa from "../../assets/visa.svg";
import { NavLink } from "react-router-dom";
import "../../i18n/i18n"
import { useTranslation } from "react-i18next";

const FooterRoot = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="footer">
        <div className="wrap">
          <div className="block-footer">
            <div className="logo-category">
              <div className="logo">
                <h4>
                  <i id="cart" className="bi bi-emoji-laughing"></i>
                </h4>
                <p>WOMAZING</p>
              </div>
              <div className="categorry">
                <li>
                  <NavLink id="footer-links" to="/">{t("Главная")}</NavLink>
                </li>
                <li>
                  <NavLink id="footer-links" to="/shop">{t("Магазин")}</NavLink>
                </li>
                <li>
                  <NavLink id="footer-links" to="/about">{t("O бренде")}</NavLink>
                </li>
                <li>
                  <NavLink id="footer-links" to="/contacts">{t("Контакты")}</NavLink>
                </li>
                {/* // <a href="">Главная</a>
                // <a href="">Магазин</a>
                // <a href="">О бренде</a>
                // <a href="">Контакты</a> */}
              </div>
            </div>
            <div className="tel-footer">
              <p>
                +7 (495) 823-54-12 <br />
                hello@womazing.com
              </p>

              <div className="inst-face-twit">
                <h4>
                  <i className="bi bi-facebook"></i>
                </h4>
                <h4>
                  <i className="bi bi-instagram"></i>
                </h4>
                <h4>
                  <i className="bi bi-twitter"></i>
                </h4>
              </div>
              <div className="visa-mastercard">
                <img src={visa} alt="" />
              </div>
            </div>
            <h4>
              <i className="bi bi-bag-"></i>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterRoot;

{
  /* // <a href="">Главная</a>
                // <a href="">Магазин</a>
                // <a href="">О бренде</a>
                // <a href="">Контакты</a> */
}
