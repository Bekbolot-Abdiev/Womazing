import React from "react";
// import LOGO from "../../assets/dress.png";
import "./HeaderRoot.css";
import { Link } from "react-router-dom";

const HeaderRoot = () => {
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
            <div className="categoty">
              <Link className="link-ctg" to="/">Главная</Link>
              <Link className="link-ctg" to="/shop">Магазин</Link>
              <Link className="link-ctg" to="/about">О бренде</Link>
              <Link className="link-ctg" to="/contacts">Контакты</Link>
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
