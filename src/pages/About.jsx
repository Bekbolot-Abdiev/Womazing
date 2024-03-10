import React from "react";
import "./About.css";
import frime from "../assets/frime.svg";
import loop from "../assets/loop.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about">
        <div className="wrap">
          <div className="block-about">
            <h1>{t("O бренде")}</h1>
            <div className="img-text-about">
              <div className="img-about">
                <img src={frime} alt="" />
              </div>
              <div className="text-about">
                <h4>{t("Идея и женщина")}</h4>
                <p>
                  {t(
                    "Womazing была основана в 2010-ом и стала одной из самыхуспешных компаний нашей страны. Как и многие итальянскиефирмы, Womazing остаётся семейной компанией, хотя ни один изчленов семьи не является модельером."
                  )}
                </p>
                <p>
                  {t(
                    "Мы действуем по успешной формуле, прибегая к услугам известныхмодельеров для создания своих коллекций. Этот метод был описанкритиком моды Колином Макдауэллом как форма дизайнерскогосо-творчества, характерная для ряда итальянских prêt-a-porter компаний."
                  )}
                </p>
              </div>
            </div>

            <div className="img-text-about">
              <div className="text-about">
                <h4>{t("Магия в деталях")}</h4>
                <p>
                  {t(
                    "Первый магазин Womazing был открыт в маленьком городке насевере страны в 2010-ом году. Первая коллекция состояла издвух пальто и костюма, которые были копиями парижских моделей."
                  )}
                </p>
                <p>
                  {t(
                    "Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало."
                  )}
                </p>
              </div>
              <div className="img-about">
                <img src={loop} alt="" />
              </div>
            </div>

            <button>
              <NavLink className="nav-link" to="/shop">
                {t("Перейти в магазин")}
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
