import React from "react";
import "./TeamRoot.css";
import team from "../../assets/team.png";

const TeamRoot = () => {
  return (
    <>
      <div className="team">
        <div className="wrap">
          <div className="block-team">
            <h1>Команда мечты Womazing</h1>
            <div className="text-img">
              <img src={team} alt="" />
              <div className="text">
                <h2>Для каждой</h2>
                <p>
                  Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                </p>
                <p>
                  Womazing ищет эти мелочи и создает прекрасные вещи, которые
                  выгодно подчеркивают достоинства каждой девушки.
                </p>
                <a href="">Подробнее о бренде</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamRoot;
