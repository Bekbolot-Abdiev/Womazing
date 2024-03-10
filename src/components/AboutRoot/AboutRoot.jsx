import React from "react";
import "./AboutRoot.css";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
const AboutRoot = () => {
  return (
    <>
      <div className="about">
        <div className="wrap">
          <div className="block-about1">
            <h1>Что для нас важно</h1>
            <div className="boxes">
              <div className="box">
                <img src={about1} alt="" />
                <h3>Качество</h3>
                <p>
                  Наши профессионалы работают на лучшем оборудовании для пошива
                  одежды беспрецедентного качества
                </p>
              </div>
              <div className="box">
                <img width={65} src={about2} alt="" />
                <h3>Скорость</h3>
                <p>
                  Благодаря отлаженной системе в Womazing мы можем отшивать до
                  20-ти единиц продукции в наших собственных цехах
                </p>
              </div>
              <div className="box">
                <img src={about3} alt="" />
                <h3>Ответственность</h3>
                <p>
                  Мы заботимся о людях и планете. Безотходное производство и
                  комфортные условия труда - все это Womazing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutRoot;
