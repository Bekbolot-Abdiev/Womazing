import React from "react";
import "./home.css";
import home1 from "../assets/hero1.png";
import home2 from "../assets/hero2.png";
import home3 from "../assets/hero3.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="home">
        <div className="wrap">
          <div className="block-home">
            <div className="home-text">
              <h1>{t("Новые поступления в этом сезоне")}</h1>
              <p>
                {t(
                  "Утонченные сочетания и бархатные оттенки - вот то, что вы искалив этом сезоне. Время исследовать."
                )}
              </p>
              <div className="btn">
                <button id="one">
                  <NavLink to="/shop" id="link">
                    <h3>
                      <i className="bi bi-arrow-down"></i>
                    </h3>
                  </NavLink>
                </button>
                <button id="two">
                  <NavLink id="link-nav" to="/shop">
                    {t("Открыть магазин")}
                  </NavLink>
                </button>
              </div>
            </div>

            <div className="home-img">
              <img src={home1} alt="" />
            </div>
            <img id="img-one" src={home2} alt="" />
            <img id="img-two" src={home3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
