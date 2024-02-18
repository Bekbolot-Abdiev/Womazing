import React from "react";
import "./home.css";
import home1 from "../assets/hero1.png";
import home2 from "../assets/hero2.png";
import home3 from "../assets/hero3.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="wrap">
          <div className="block-home">
            <div className="home-text">
              <h1>Новые поступления в этом сезоне</h1>
              <p>
                Утонченные сочетания и бархатные оттенки - вот то, что вы искали
                в этом сезоне. Время исследовать.
              </p>
              <div className="btn">
                <button id="one">
                  <h3>
                    <i className="bi bi-arrow-down"></i>
                  </h3>
                </button>
                <button id="two">Открыть магазин</button>
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
