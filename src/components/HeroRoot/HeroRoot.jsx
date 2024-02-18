import React from "react";
import "./HeroRoot.css";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

const HeroRoot = () => {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <div className="block-hero">
            <div className="hero-text">
              <h1>Новые поступления в этом сезоне</h1>
              <p>
                Утонченные сочетания и бархатные оттенки - вот то, что вы искали
                в этом сезоне. Время исследовать.
              </p>
              <button id="button-hero">Открыть магазин</button>
            </div>
            <div className="hero-img">
              <img id="hero-3" src={hero3} alt="" />
              <img id="hero-2" src={hero2} alt="" />
              <img id="hero-1" src={hero1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroRoot;
