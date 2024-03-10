import React, { useState } from "react";
// import LOGO from "../../assets/dress.png";
import "./HeaderRoot.css";
import { Link } from "react-router-dom";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

const HeaderRoot = () => {
  const [active,setActive] = useState ('ru')

  const { t, i18n } = useTranslation();

  function changeLng(language) {
    const lang = language.toLowerCase();
    i18n.changeLanguage(lang);
    setActive(lang)
  }
  return (
    <>
      <div className="header">
        <div className="wrap">
          <div className="block-header">
            <div className="logo">
              {/* <img width={30} src={LOGO} alt="" /> */}
              <h4>
                <i className="bi bi-emoji-laughing"></i>
              </h4>
              <p>WOMAZING</p>
            </div>
            <div className="category">
              <Link className="link-ctg" to="/">
                {t("Главная")}
              </Link>
              <Link className="link-ctg" to="/shop">
                {t("Магазин")}
              </Link>
              <Link className="link-ctg" to="/about">
                {t("O бренде")}
              </Link>
              <Link className="link-ctg" to="/contacts">
                {t("Контакты")}
              </Link>
            </div>
            <div className="btns-header">
              <button className={active === "ru" ? "active" : ""} onClick={() => changeLng("ru")}>RU</button>
              <button className={active === "kg" ? "active" : ""} onClick={() => changeLng("kg")}>KG</button>
            </div>
            <div className="tel-logo">
              <h5>
                <i className="bi bi-telephone"></i>
              </h5>
              <p>+7 (495) 823-54-12</p>
            </div>
            <Link to="/cart">
              <h4>
                <i className="bi bi-bag-check"></i>
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderRoot;
